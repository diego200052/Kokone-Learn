const { Router } = require('express');
const router = Router();

const User = require('../models/user');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Hello World'));

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
