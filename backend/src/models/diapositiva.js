const { Schema, model } = require('mongoose');
var ObjectId = Schema.ObjectId;

const diapositivaSchema = new Schema({
    idClase: ObjectId, /* Referencia al documento clase */
    tipoPlantilla:String,
    titulo:String,
    urlImagen:String,
    contenido:String
},{
    timestamps: true
});

module.exports = model('diapositivas', diapositivaSchema, 'diapositivas');