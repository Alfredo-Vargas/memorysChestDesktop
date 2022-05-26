var express = require('express');
var router = express.Router();
var fs = require('fs');

// Sync methods locks the server until instruction is performed
var fullPhotosArrayRaw = fs.readFileSync("fullPhotosInfo.json");
var fullPhotosArray= JSON.parse(fullPhotosArrayRaw);

var handsetPhotosArray = fullPhotosArray.handsetPhotos;
var webPhotosArray = fullPhotosArray.webPhotos;

// GET photos (read)
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

// PATCH photos (modify)
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
    handsetPhotosArray[req.body.id] = photoHandset;
    webPhotosArray[req.body.id] = photoWeb;

    let jsonResponse = {
      "handsetPhotos": handsetPhotosArray,
      "webPhotos" : webPhotosArray
    }
    var dataToWrite = JSON.stringify(jsonResponse, null, 2);  // this options makes the json object readable
    fs.writeFile('fullPhotosInfo.json', dataToWrite, finished);
    function finished(err) {
      console.log("The photo was modified.");
    }
    res.send(jsonResponse);
  }
  else {
    res.status(404).send("The photo with the given ID was not found");
  }
});

// POST photos (add)
router.post('/', function(req, res, next) {
  console.log("POST was called\n");
  /* console.log("The body of request is: ", req.body);
  console.log("\n"); */

  const photoHandset = {
    id: handsetPhotosArray.length,
    img: req.body.img,
    geolocation: req.body.geolocation,
    camera: req.body.camera,
    dateTaken: req.body.dateTaken,
    cols: 2,
    rows: 1
  };

  const photoWeb = {
    id: handsetPhotosArray.length,
    img: req.body.img,
    geolocation: req.body.geolocation,
    camera: req.body.camera,
    dateTaken: req.body.dateTaken,
    cols: 1,
    rows: 1
  };
/*
  console.log("The new element is:", photoHandset);
  console.log("\n");
*/
  handsetPhotosArray.push(photoHandset);
  webPhotosArray.push(photoWeb);
/*
  console.log("After post(push):");
  console.log(handsetPhotosArray);
*/
  let jsonResponse = {
    "handsetPhotos": handsetPhotosArray,
    "webPhotos" : webPhotosArray
  }

  var dataToWrite = JSON.stringify(jsonResponse, null, 2);  // this options makes the json object readable
  fs.writeFile('fullPhotosInfo.json', dataToWrite, finished);
  function finished(err) {
    console.log("New photo was included.");
  }

  res.send(jsonResponse);
});


router.delete('/:id', function(req, res) {
  console.log("Deletion operation was called.\n");
  const photo = handsetPhotosArray.find(p => p.id == parseInt(req.params.id));
  if (!photo) {
    res.status(404).send('The photo with the given ID was not found');
  }
  else {
    // console.log("Element to be deleted is: \n", photo);
    // console.log(photo);
    const photoIndex = handsetPhotosArray.indexOf(photo);
    handsetPhotosArray.splice(photoIndex, 1);
    webPhotosArray.splice(photoIndex, 1);
    res.send(photo);

    let newData = {
      "handsetPhotos": handsetPhotosArray,
      "webPhotos" : webPhotosArray
    }

    /* console.log("The new array is:");
    console.log(handsetPhotosArray); */
    var dataToWrite = JSON.stringify(newData, null, 2);  // this options makes the json object readable
    fs.writeFile('fullPhotosInfo.json', dataToWrite, finished);
    function finished(err) {
      console.log("Deletion completed.");
    }
  }
});

module.exports = router;
