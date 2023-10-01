import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function listOrder(req: Request, res: Response) {
  try {
    const orders = await Order.find()
    // -1 do mais novo p mais velho
      .sort({ createdAt: 1})
      .populate('products.product');

    res.json(orders);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
