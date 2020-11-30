const {Router} = require('express');
const annotationController = require('../controllers/annotationController')

const router = Router();

const routes = () => {
  router.get('/', annotationController.listAnnotations);
  router.post('/',annotationController.createAnnotation);
  router.get('/:id', annotationController.getAnnotation);

  return router
}


module.exports = routes;
