import express from 'express';
import * as propertyController from '../controllers/propertyController.js';


const router = express.Router();

router.route('/').post(propertyController.create);
router.route('/:id').put(propertyController.update);

export default router;