import express from 'express';
import testPostController from '../../../controller/test/testPostController';
import Validator from '../../../middlewares/Validator';
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ data: 'hello' });
});

router.post('/', Validator('test'), testPostController);

export default router;
