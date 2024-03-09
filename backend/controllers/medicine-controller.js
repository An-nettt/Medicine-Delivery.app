import Medicine from '../models/medicine-model.js';
// import { ctrlWrapper } from '../decorators/index.js';

const getAll = async (req, res) => {
  const result = await Medicine.find();
  res.json(result);
  console.log(result);
};

export default getAll;
