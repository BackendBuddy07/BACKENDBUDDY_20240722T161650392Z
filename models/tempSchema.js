const mongoose = require('mongoose');

const tempSchema = new mongoose.Schema(
{
    Field1: { 
        type: String,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model('temp', tempSchema);
