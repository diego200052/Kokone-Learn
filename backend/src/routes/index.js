const { Router } = require('express');
const router = Router();

const jwt = require('jsonwebtoken');

const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const User = require('../models/user');

router.get('/', (req, res) => res.send('Hello World'));

//Configuracion de multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images'))
    },
    //Esta opcion es para decirle con que nombre guardar la imagen en el servidor
    filename: (req, file, cb) =>{
        cb(null, uuidv4() + path.extname(file.originalname)); //El archivo se guardara con un UUID unico y su extension
    }
});

router.post('/signup', async (req,res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const newUser = new User({email, password});
    console.log(newUser);
    await newUser.save();

    const token = jwt.sign({_id: newUser._id}, 'secretKey');
    res.status(200).json({token});
});

router.post('/signin', async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(401).send('The email dosent exist');
    if(user.password !== password) return res.status(401).send("Wrong password");

    const token = jwt.sign({_id: user._id}, 'secretKey');
    return res.status(200).json({token});

});

router.get('/task', (req, res) => {
    res.json([{
            _id: 1,
            name: 'Task one',
            description: 'lorem ipsum',
            date: '2020-07-20T04:13:56.063Z'
        },
        {
            _id: 2,
            name: 'Task two',
            description: 'lorem ipsum',
            date: '2020-07-20T04:13:56.063Z'
        },
        {
            _id: 3,
            name: 'Task three',
            description: 'lorem ipsum',
            date: '2020-07-20T04:13:56.063Z'
        }]);
});

router.get('/private-task', verifyToken , (req, res) => {
    res.json([{
        _id: 1,
        name: 'Task one',
        description: 'lorem ipsum',
        date: '2020-07-20T04:13:56.063Z'
    },
        {
            _id: 2,
            name: 'Task two',
            description: 'lorem ipsum',
            date: '2020-07-20T04:13:56.063Z'
        },
        {
            _id: 3,
            name: 'Task three',
            description: 'lorem ipsum',
            date: '2020-07-20T04:13:56.063Z'
        }]);
})

//Procesador de imagenes
const upload = multer({
    storage, //Carga la configuracion que establecimos anteriormente
    dest: path.join(__dirname, '../public/images'),//Definimos la ruta en donde se subiran las imagenes
    limits: {fileSize: 1000000}, // Aqui especificamos que el tamaño maximo de la imagen es de 1mb
    fileFilter: (req, file, cb) =>{
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype); //Comprobamos si el archivo coincide con las extenciones
        const extname = filetypes.test(path.extname(file.originalname))//Obtenemos la extencion del archivo y comprobamos si coincide con las extenciones
        if(mimetype && extname){
            return cb(null, true);
        }
        cb("Error: El archivo debe ser una imagen valida");
    }
}).single('image'); //.single ('Nombre del formulario html name="image"') //single solo permite la subida de 1 imagen

router.post('/upload'/*, verifyToken */, (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(200).json({
                error: 'A Multer error occurred when uploading.'
            });
        } else if (err) {
            return res.status(200).json({
                error: 'An unknown error occurred when uploading.'
            });
        }
        if(!req.file) return res.status(200).json({
            error: 'An unknown error occurred when uploading.'
        });
        res.status(200).json({
            path: `/images/${req.file.filename}`
        });
        console.log(req.file);
    });
});

module.exports = router;

function verifyToken(req, res, next){
    console.log(req.headers.authorization);
    if(!req.headers.authorization) return res.status(401).send('Unauthorized Request');
    const token = req.headers.authorization.split(' ')[1]
    if(token === "null") return res.status(401).send('Unauthorized Request');
    const payload = jwt.verify(token, 'secretKey');
    console.log(payload);
    req.userId = payload._id;
    next();
}
