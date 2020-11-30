const Annotations = require('../models/Annotation.js');
const httpStatusCode = require('../constants/http-status-code.json');
const annotationMessages = require('../constants/annotation-msgs.json');

module.exports.listAnnotations = (req, res) => {
    res.status(200).send(Annotations);
};

module.exports.getAnnotation = (req,res) => {
    const id = req.params.id;
    
    if (id < 0 || id >= Annotations.length)
        res.status(httpStatusCode.NOT_FOUND).send({error: annotationMessages.NOT_FOUND});
    else
        res.status(httpStatusCode.OK).send(Annotations[id]);
};

module.exports.createAnnotation = (req,res) => {
    ({tags, tumb, annotationsParams} = req.body);
    Annotations.push({id:Annotations.length,tags,tumb,annotationsParams});
    res.status(httpStatusCode.OK).send();
};