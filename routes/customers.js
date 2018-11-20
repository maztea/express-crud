const customers = require('../model/customers');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let dataCust = customers.GetAll();
    res.send(dataCust);
});
router.get('/:id', function(req, res, next) {
    let dataCust = customers.GetByID(req.params.id);
    res.send(dataCust);
});
router.post('/', function(req, res, next) {
    let dataCust = {
        id     : req.body.id,
        nama   : req.body.nama,
        kota   : req.body.kota,
        alamat : req.body.alamat
    };    
    customers.Save(dataCust);
    res.send(dataCust);
});

router.post('/update/:id', function(req, res, next) {
    let dataCust = {
        id     : req.body.id,
        nama   : req.body.nama,
        kota   : req.body.kota,
        alamat : req.body.alamat
    };    
    customers.Update(dataCust);
    res.send(dataCust);
});

router.get('/remove/:id', function(req, res, next) {    
    customers.Remove(req.params.id);
    res.send('data terhapus');
});

module.exports = router;
