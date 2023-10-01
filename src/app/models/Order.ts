import { model, Schema } from 'mongoose';

// nome do model e a estrutura com a tipagem
export const Order = model('Order', new Schema({
  table: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'WAITING',
    enum: ['WAITING', 'IN_PRODUCT', 'DONE'], // apenas esses valores
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  products: {
    required: true,
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 1,
      },
    }],
  },
}));
