var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse = {
    "handsetCards": [
      { figureName: 'figure', title: 'Card 1', cols: 2, rows: 1 },
      { figureName: 'figure1', title: 'Card 2', cols: 2, rows: 1 },
      { figureName: 'figure2', title: 'Card 3', cols: 2, rows: 1 },
      { figureName: 'figure3', title: 'Card 4', cols: 2, rows: 1 },
      { figureName: 'figure4', title: 'Card 3', cols: 2, rows: 1 },
      { figureName: 'figure5', title: 'Card 3', cols: 2, rows: 1 },
      { figureName: 'figure6', title: 'Card 3', cols: 2, rows: 1 },
      { figureName: 'figure7', title: 'Card 3', cols: 2, rows: 1 },
      { figureName: 'figure8', title: 'Card 3', cols: 2, rows: 1 },
      { figureName: 'figure9', title: 'Card 3', cols: 2, rows: 1 },
      { figureName: 'figure10', title: 'Card 3', cols: 2, rows: 1 }
    ],
    "webCards" : [
        {  figureName: 'figure', title: 'Card 1', cols: 1, rows: 1 },
        {  figureName: 'figure1', title: 'Card 2', cols: 1, rows: 1 },
        {  figureName: 'figure2', title: 'Card 3', cols: 1, rows: 1 },
        {  figureName: 'figure3', title: 'Card 4', cols: 1, rows: 1 },
        {  figureName: 'figure4', title: 'Card 4', cols: 1, rows: 1 },
        {  figureName: 'figure5', title: 'Card 4', cols: 1, rows: 1 },
        {  figureName: 'figure6', title: 'Card 4', cols: 1, rows: 1 },
        {  figureName: 'figure7', title: 'Card 4', cols: 1, rows: 1 },
        {  figureName: 'figure9', title: 'Card 4', cols: 1, rows: 1 },
        {  figureName: 'figure10', title: 'Card 4', cols: 1, rows: 1 },
    ]
  }
  res.json(jsonResponse);
});

module.exports = router;
