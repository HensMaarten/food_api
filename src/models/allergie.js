const mongoose = require('mongoose');
const  allergieSchema = new mongoose.Schema({
    naam: {type: String},
},
{
    collection: 'Allergieën'
});
module.exports = mongoose.model('Allergieën',allergieSchema)