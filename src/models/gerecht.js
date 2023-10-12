const mongoose = require('mongoose');
const Allergie = require('./allergie');
const Ingrediënt = require('./ingrediënt')
const  gerechtSchema = new mongoose.Schema({
    naam: {type: String},
    foto: {type: String},
    bereidingstijd: {type: Number},
    aantalPersonen: {type: Number},
    Ingrediënten: [{type: mongoose.Schema.Types.ObjectId, ref: Ingrediënt}], 
    bereidingswijze: {type: String},
    Allergieën: [{type: mongoose.Schema.Types.ObjectId, ref: Allergie}], 
    review: {type: Number}
},
{
    collection: 'Gerechten'
});
module.exports = mongoose.model('gerechten',gerechtSchema)