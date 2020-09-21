var express = require('express');
const Annotations = require('../models/Annotation.js')
var router = express.Router();

router.get('/', (req, res) => {
  res.send(Annotations);
});

router.post('/', (req,res) => {
  ({tags, rating, tumb} = req.body);
  Annotations.push({id:Annotations.length,tags,rating,tumb});
  res.status(200).send();
});

module.exports = router;
