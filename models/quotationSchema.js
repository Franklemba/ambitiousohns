const mongoose = require('mongoose')

const quotationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    message:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('quotation',quotationSchema)