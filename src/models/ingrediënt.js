const mongoose = require('mongoose');
const  ingrediëntSchema = new mongoose.Schema({
    naam: {type: String},
    hoeveelheid: {type: Number},
    eenheid: {type: String},
},
{
    collection: 'Ingrediënten'
});
module.exports = mongoose.model('Ingrediënten',ingrediëntSchema)