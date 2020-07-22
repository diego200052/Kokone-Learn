const { Schema, model } = require('mongoose');

const profesorSchema = new Schema({
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    usuario: String,
    correo: String,
    password: String
},{
    timestamps: true
});

module.exports = model('profesors', profesorSchema, 'profesors');
