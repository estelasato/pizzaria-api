import { model, Schema } from 'mongoose';

// nome do model e a estrutura com a tipagem
export const Category = model('Category', new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
}));
