import express from 'express';
import cors from 'cors';

import medicineRouter from './routes/api/medicine-router.js';

const app = express();

app.use(cors());
// app.use(express.json());

app.use('/', medicineRouter);

export default app;
