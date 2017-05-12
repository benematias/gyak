var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');
var products = [

    new Product({
        imagePath: 'http://www.termeszettar.hu/anyagok/fox/r005.jpg',
        title: 'Roka',
        description: ' Roka koma jár a lukaba nem tudom asjanos tavább',
        price: 10
    }),
    new Product({
        imagePath: 'http://24.p3k.hu/app/uploads/2016/11/roka-kk-1024x576.jpg',
        title: 'kölyök Roka',
        description: '  wowowow Roka koma jár a lukaba nem tudom asjanos tavább',
        price: 100
    }),
    new Product({
        imagePath: 'https://vadaszapro.net/ckfinder/userfiles/images/roka_roka_roka.jpg',
        title: 'öreg Roka',
        description: '  wowowow öregroka',
        price: 100
    }),
    new Product({
        imagePath: 'http://people.inf.elte.hu/sorsaai/web%201.2/elemek/sarki.jpg',
        title: 'fehér Roka',
        description: ' nsunyi fehér roka',
        price: 20
    }),
    new Product({
        imagePath: 'https://www.kreativjatek.hu/upload_files/products/20160803115411-pluss-figura-teeny-finley-roka-ty.jpg',
        title: 'Evelin Rokája',
        description: ' cukifaktor 10000',
        price: 500
    }),
    new Product({
        imagePath: 'http://ocdn.eu/pulscms-transforms/1/MFrktkpTURBXy8yYTNiZTk0OTgyYmM2YTZlM2Q2ZWQ0OTNlY2MxZTM1Mi5qcGeRkwXNAXzM8A',
        title: '2 kölyök Roka',
        description: '  kettöt az egy áráért csak itt csak most ',
        price: 70
    }),

];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {

            exit();
        }

    });
}

function exit() {

    mongoose.disconnect();
}
