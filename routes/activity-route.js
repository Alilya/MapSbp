const Router = require('express');
const router = new Router();
const controller = require('../controller/activity-controller')

router.post('/activity', controller.createActivity)
router.get('/activity', controller.getActivity)
router.delete('/activity/:id', controller.deleteActivity)

module.exports=router;