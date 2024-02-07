const mongoose = require('mongoose'); 

const dataSchema = new mongoose.Schema({
    nama : {
        required: true,
        type: String 
    },
    nisn : {
        required : true,
        type : String
    },
    alamat : {
        required : true,
        type : String
    },
    hobi : {
        required : true,
        type :String
    },
    umur : {
        required : true,
        type : String
    }
})

module.exports = mongoose.model('siswa', dataSchema)