// const { get } = require("http")

const siswa = require('../model/siswa')

//ini untuk data yang diambil oleh method get di index luar

const getAll = async (req, res) => {
    try {
        const siswa = await siswa.find()
        res.status(200).json(siswa);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server na Error euy'});
    }
}

//karena menggunakan post, ini justru mengambil data dan bisa diisi dari postman

const create = async (req, res) => {
    const data=new siswa({
        nama : req.body.nama,
        nisn : req.body.nisn,
        alamat : req.body.alamat,
        hobi : req.body.hobi,
        umur : req.body.umur,
    });
    try {;
        const save = await data.save();
        console.log(save);
        res.status(201).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error : 'Internal Server Error'});
    }
}

module.exports = {
    getAll,
    create
}

