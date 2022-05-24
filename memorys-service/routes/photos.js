var express = require('express');
var router = express.Router();

var handsetPhotosArray = [
  { id: 0, img: 'figure', geolocation: 'Peru', camera: 'Iphone5', dateTaken:new Date('2009/10/16'), cols: 2, rows: 1 },
  { id: 1, img: 'figure1', geolocation: 'Brazil', camera: 'SamsungEdge11', dateTaken:new Date('2012/12/12'), cols: 2, rows: 1 },
  { id: 2, img: 'figure2', geolocation: 'Italy', camera: 'Iphone5', dateTaken:new Date('2015/10/16'), cols: 2, rows: 1 },
  { id: 3, img: 'figure3', geolocation: 'Portugal', camera: 'SamsungEdge11', dateTaken:new Date('2018/12/12'), cols: 2, rows: 1 },
  { id: 4, img: 'figure4', geolocation: 'Belgium', camera: 'Iphone5', dateTaken:new Date('2020/04/16'), cols: 2, rows: 1 }
];

var webPhotosArray = [
  { id: 0, img: 'figure', geolocation: 'Peru', camera: 'Iphone5', dateTaken:new Date('2009/10/16'), cols: 1, rows: 1 },
  { id: 1, img: 'figure1', geolocation: 'Brazil', camera: 'SamsungEdge11', dateTaken:new Date('2012/12/12'), cols: 1, rows: 1 },
  { id: 2, img: 'figure2', geolocation: 'Italy', camera: 'Iphone5', dateTaken:new Date('2015/10/16'), cols: 1, rows: 1 },
  { id: 3, img: 'figure3', geolocation: 'Portugal', camera: 'SamsungEdge11', dateTaken:new Date('2018/12/12'), cols: 1, rows: 1 },
  { id: 4, img: 'figure4', geolocation: 'Belgium', camera: 'Iphone5', dateTaken:new Date('2020/04/16'), cols: 1, rows: 1 }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse = {
    "handsetPhotos": handsetPhotosArray,
    "webPhotos" : webPhotosArray
  }
  res.json(jsonResponse);
});

router.get('/:id', function(req, res, next) {
  const photo = webPhotosArray.find(c => c.id === parseInt(req.params.id));
  if (!photo) {
    res.status(404).send("The photo with the given ID was not found");
  }
  else {
    res.send(photo);
  }
});

router.patch('/:id', function(req, res, next) {
  console.log("Patch was called!");
  let photoHandsetFound = handsetPhotosArray.find(
    (photo) => {
      return photo.id === req.body.id;
    }
  );
  let photoWebFound = webPhotosArray.find(
    (photo) => {
      return photo.id === req.body.id;
    }
  );

  if (photoHandsetFound) {
    const photoHandset = {
      id: req.body.id,
      img: req.body.img,
      geolocation: req.body.geolocation,
      camera: req.body.camera,
      dateTaken: req.body.dateTaken,
      cols: 2,
      rows: 1
    };

    const photoWeb = {
      id: req.body.id,
      img: req.body.img,
      geolocation: req.body.geolocation,
      camera: req.body.camera,
      dateTaken: req.body.dateTaken,
      cols: 1,
      rows: 1
    };
    photoHandsetFound = photoHandset;
    photoWebFound = photoWeb;
  }
  res.send(photoWebFound);
});


router.post('/', function(req, res, next) {

  const photoHandset = {
    id: handsetPhotosArray.length + 1,
    img: req.body.img,
    geolocation: req.body.geolocation,
    camera: req.body.camera,
    dateTaken: req.body.dateTaken,
    cols: 2,
    rows: 1
  };

  const photoWeb = {
    id: handsetPhotosArray.length + 1,
    img: req.body.img,
    geolocation: req.body.geolocation,
    camera: req.body.camera,
    dateTaken: req.body.dateTaken,
    cols: 1,
    rows: 1
  };

  handsetPhotosArray.push(photoHandset);
  webPhotosArray.push(photoWeb);

  res.send(photoHandset);
});

module.exports = router;
