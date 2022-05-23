var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse = {
    "handsetCards": [
      { id: 0, img: 'figure', geolocation: 'Peru', cols: 2, rows: 1 },
      { id: 1, img: 'figure1', geolocation: 'Brazil', cols: 2, rows: 1 },
      { id: 2, img: 'figure2', geolocation: 'Italy', cols: 2, rows: 1 },
      { id: 3, img: 'figure3', geolocation: 'Portugal', cols: 2, rows: 1 },
      { id: 4, img: 'figure4', geolocation: 'Belgium', cols: 2, rows: 1 },
      { id: 5, img: 'figure5', geolocation: 'Peru', cols: 2, rows: 1 },
      { id: 6, img: 'figure6', geolocation: 'Brazil', cols: 2, rows: 1 },
      { id: 7, img: 'figure7', geolocation: 'Italy', cols: 2, rows: 1 },
      { id: 8, img: 'figure8', geolocation: 'Portugal', cols: 2, rows: 1 },
      { id: 9, img: 'figure9', geolocation: 'Belgium', cols: 2, rows: 1 },
      { id: 10, img: 'figure10', geolocation: 'Peru', cols: 2, rows: 1 },
      { id: 11, img: 'figure11', geolocation: 'Brazil', cols: 2, rows: 1 },
      { id: 12, img: 'figure12', geolocation: 'Italy', cols: 2, rows: 1 },
      { id: 13, img: 'figure13', geolocation: 'Portugal', cols: 2, rows: 1 },
      { id: 14, img: 'figure14', geolocation: 'Belgium', cols: 2, rows: 1 },
      { id: 15, img: 'figure15', geolocation: 'Peru', cols: 2, rows: 1 },
      { id: 16, img: 'figure16', geolocation: 'Brazil', cols: 2, rows: 1 },
      { id: 17, img: 'figure17', geolocation: 'Italy', cols: 2, rows: 1 },
      { id: 18, img: 'figure18', geolocation: 'Portugal', cols: 2, rows: 1 },
      { id: 19, img: 'figure19', geolocation: 'Belgium', cols: 2, rows: 1 },
      { id: 20, img: 'figure20', geolocation: 'Peru', cols: 2, rows: 1 },
      { id: 21, img: 'figure21', geolocation: 'Brazil', cols: 2, rows: 1 },
      { id: 22, img: 'figure22', geolocation: 'Italy', cols: 2, rows: 1 },
      { id: 23, img: 'figure23', geolocation: 'Portugal', cols: 2, rows: 1 },
      { id: 24, img: 'figure24', geolocation: 'Belgium', cols: 2, rows: 1 },
      { id: 25, img: 'figure25', geolocation: 'Peru', cols: 2, rows: 1 },
      { id: 26, img: 'figure26', geolocation: 'Brazil', cols: 2, rows: 1 },
      { id: 27, img: 'figure27', geolocation: 'Italy', cols: 2, rows: 1 },
      { id: 28, img: 'figure28', geolocation: 'Portugal', cols: 2, rows: 1 },
      { id: 29, img: 'figure29', geolocation: 'Belgium', cols: 2, rows: 1 },
      { id: 30, img: 'figure30', geolocation: 'Germany', cols: 2, rows: 1 }
    ],
    "webCards" : [
      { id: 0, img: 'figure', geolocation: 'Peru', cols: 1, rows: 1 },
      { id: 1, img: 'figure1', geolocation: 'Brazil', cols: 1, rows: 1 },
      { id: 2, img: 'figure2', geolocation: 'Italy', cols: 1, rows: 1 },
      { id: 3, img: 'figure3', geolocation: 'Portugal', cols: 1, rows: 1 },
      { id: 4, img: 'figure4', geolocation: 'Belgium', cols: 1, rows: 1 },
      { id: 5, img: 'figure5', geolocation: 'Peru', cols: 1, rows: 1 },
      { id: 6, img: 'figure6', geolocation: 'Brazil', cols: 1, rows: 1 },
      { id: 7, img: 'figure7', geolocation: 'Italy', cols: 1, rows: 1 },
      { id: 8, img: 'figure8', geolocation: 'Portugal', cols: 1, rows: 1 },
      { id: 9, img: 'figure9', geolocation: 'Belgium', cols: 1, rows: 1 },
      { id: 10, img: 'figure10', geolocation: 'Peru', cols: 1, rows: 1 },
      { id: 11, img: 'figure11', geolocation: 'Brazil', cols: 1, rows: 1 },
      { id: 12, img: 'figure12', geolocation: 'Italy', cols: 1, rows: 1 },
      { id: 13, img: 'figure13', geolocation: 'Portugal', cols: 1, rows: 1 },
      { id: 14, img: 'figure14', geolocation: 'Belgium', cols: 1, rows: 1 },
      { id: 15, img: 'figure15', geolocation: 'Peru', cols: 1, rows: 1 },
      { id: 16, img: 'figure16', geolocation: 'Brazil', cols: 1, rows: 1 },
      { id: 17, img: 'figure17', geolocation: 'Italy', cols: 1, rows: 1 },
      { id: 18, img: 'figure18', geolocation: 'Portugal', cols: 1, rows: 1 },
      { id: 19, img: 'figure19', geolocation: 'Belgium', cols: 1, rows: 1 },
      { id: 20, img: 'figure20', geolocation: 'Peru', cols: 1, rows: 1 },
      { id: 21, img: 'figure21', geolocation: 'Brazil', cols: 1, rows: 1 },
      { id: 22, img: 'figure22', geolocation: 'Italy', cols: 1, rows: 1 },
      { id: 23, img: 'figure23', geolocation: 'Portugal', cols: 1, rows: 1 },
      { id: 24, img: 'figure24', geolocation: 'Belgium', cols: 1, rows: 1 },
      { id: 25, img: 'figure25', geolocation: 'Peru', cols: 1, rows: 1 },
      { id: 26, img: 'figure26', geolocation: 'Brazil', cols: 1, rows: 1 },
      { id: 27, img: 'figure27', geolocation: 'Italy', cols: 1, rows: 1 },
      { id: 28, img: 'figure28', geolocation: 'Portugal', cols: 1, rows: 1 },
      { id: 29, img: 'figure29', geolocation: 'Belgium', cols: 1, rows: 1 },
      { id: 30, img: 'figure30', geolocation: 'Germany', cols: 1, rows: 1 }
    ]
  }
  res.json(jsonResponse);
});

module.exports = router;
