import { Schema, model } from 'mongoose';

const medicineSchema = new Schema({
  title: String,
  shop: String,
  favorite: Boolean,
});

const Medicine = model('medicine', medicineSchema);

export default Medicine;
