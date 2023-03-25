//để quản lí những cái router liên quan tới thằng courses
const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');
//newController.index
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.post('/handle-form-actions', courseController.handleFormActions);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy); //soft delete
router.delete('/:id/force', courseController.forceDestroy); //delete
// router.get('/:id', courseController.destroy);
router.get('/:slug', courseController.show);

module.exports = router;
