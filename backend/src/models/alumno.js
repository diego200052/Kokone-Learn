const { Schema, model } = require('mongoose');

const alumnoSchema = new Schema({
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    usuario: String,
    correo: String,
    password: String,
    escuela: String
},{
    timestamps: true
});

module.exports = model('alumnos', alumnoSchema, 'alumnos');