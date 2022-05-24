var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse = {
    "handsetPhotos": [
      { id: 0, img: 'figure', geolocation: 'Peru', camera: 'Iphone5', dateTaken:new Date('2009/10/16'), cols: 2, rows: 1 },
      { id: 1, img: 'figure1', geolocation: 'Brazil', camera: 'SamsungEdge11', dateTaken:new Date('2012/12/12'), cols: 2, rows: 1 },
      { id: 2, img: 'figure2', geolocation: 'Italy', camera: 'Iphone5', dateTaken:new Date('2015/10/16'), cols: 2, rows: 1 },
      { id: 3, img: 'figure3', geolocation: 'Portugal', camera: 'SamsungEdge11', dateTaken:new Date('2018/12/12'), cols: 2, rows: 1 },
      { id: 4, img: 'figure4', geolocation: 'Belgium', camera: 'Iphone5', dateTaken:new Date('2020/04/16'), cols: 2, rows: 1 }
    ],
    "webPhotos" : [
      { id: 0, img: 'figure', geolocation: 'Peru', camera: 'Iphone5', dateTaken:new Date('2009/10/16'), cols: 1, rows: 1 },
      { id: 1, img: 'figure1', geolocation: 'Brazil', camera: 'SamsungEdge11', dateTaken:new Date('2012/12/12'), cols: 1, rows: 1 },
      { id: 2, img: 'figure2', geolocation: 'Italy', camera: 'Iphone5', dateTaken:new Date('2015/10/16'), cols: 1, rows: 1 },
      { id: 3, img: 'figure3', geolocation: 'Portugal', camera: 'SamsungEdge11', dateTaken:new Date('2018/12/12'), cols: 1, rows: 1 },
      { id: 4, img: 'figure4', geolocation: 'Belgium', camera: 'Iphone5', dateTaken:new Date('2020/04/16'), cols: 1, rows: 1 }
    ]
  }
  res.json(jsonResponse);
});

module.exports = router;
