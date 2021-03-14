import { AuthService } from './auth.service';
import { RestDataSource } from './rest.datasource';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { NgModule } from "@angular/core";
import { Cart } from './cart.model';
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { HttpClientModule } from '@angular/common/http';
import { ConnectionService } from './connection.service';
@NgModule({
imports:[HttpClientModule],
providers: [ProductRepository, StaticDataSource, Cart, OrderRepository, Order,
    {provide: StaticDataSource, useClass: RestDataSource }, AuthService, RestDataSource, ConnectionService]
})
export class ModelModule { }