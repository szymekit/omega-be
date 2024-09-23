import { Module } from '@nestjs/common';
import { ConfigurationController } from './configuration/configuration.controller';
import { ConfigurationService } from './configuration/configuration.service';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';

@Module({
  imports: [],
  controllers: [ConfigurationController, OrderController],
  providers: [ConfigurationService, OrderService],
})
export class AppModule {}
