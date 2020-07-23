const { Schema, model } = require('mongoose');
var ObjectId = Schema.ObjectId;

const ejercicioSchema = new Schema({
    idClase: ObjectId, /* Referencia al documento clase */
    tipoDePregunta: String,
    contenido: String,
    respuestas: [{ type: Schema.Types.Mixed}],
    urlImagen: String
},{
    timestamps: true
});

module.exports = model('ejercicio', ejercicioSchema, 'ejercicio');