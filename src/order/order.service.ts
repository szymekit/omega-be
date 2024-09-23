import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  private orders = []; // Temporary in-memory storage

  create(createOrderDto: CreateOrderDto) {
    const newOrder = {
      id: Date.now().toString(), // Generate a simple ID
      ...createOrderDto,
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  findOne(id: string) {
    return this.orders.find(order => order.id === id);
  }
}
