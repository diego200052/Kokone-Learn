const { Schema, model } = require('mongoose');
var ObjectId = Schema.ObjectId;

const claseSchema = new Schema({
    idCurso: ObjectId, /* Referencia al documento curso */
    nombreClase: String,
    descripcion: String
},{
    timestamps: true
});

module.exports = model('clase', claseSchema, 'clase');