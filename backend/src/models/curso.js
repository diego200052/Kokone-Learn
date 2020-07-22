const { Schema, model } = require('mongoose');
var ObjectId = Schema.ObjectId;

const cursoSchema = new Schema({
    idProfesor: ObjectId, /* Referencia al documento profesor */
    nombreCurso: String,
    nivel: String, /* Nivel educativo */
    escuela: String, /* Nombre de la escuela */
    descripcion: String,
    password: String /* Contraseña para acceder al curso */
},{
    timestamps: true
});

module.exports = model('cursos', cursoSchema, 'cursos');