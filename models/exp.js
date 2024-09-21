import { Schema, model, models } from 'mongoose';
// models/exp.js
const ExpSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  Exp: {
    type: String,
    required: [true, 'Exp is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

const Exp = models.Exp || model('Exp', ExpSchema);

export default Exp;