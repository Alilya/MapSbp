const Router = require('express');
const router = new Router();
const controller = require('../controller/places-controller')

router.post('/places', controller.createPlace)
router.get('/places', controller.getListPlaces)
router.get('/places/:id', controller.getOnePlace)
router.put('/places', controller.updateListPlaces)
router.delete('/places/:id', controller.deletePlace)

module.exports=router;