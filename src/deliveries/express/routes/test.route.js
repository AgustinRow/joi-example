import express from 'express';
import testPostController from '../../../controller/test/testPostControllerller';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ data: 'hello' });
});

router.post('/', testPostController);

export default router;
