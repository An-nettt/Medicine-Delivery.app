import express from 'express';
// import medicineController from '../../controllers/medicine-controller.js';

import getAll from '../../controllers/medicine-controller.js';

const router = express.Router();
// console.log(getAll);

router.get('/', getAll);

export default router;
