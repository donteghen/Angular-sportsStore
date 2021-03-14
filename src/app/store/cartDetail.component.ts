import { ConnectionService } from './../model/connection.service';
import { Component } from "@angular/core";
import { Cart } from '../model/cart.model';
@Component({
templateUrl:"cartDetail.component.html"
})
export class CartDetailComponent {
    public connected : boolean = true;
    constructor(public cart: Cart, public connection : ConnectionService) 
    {
        this.connected = this.connection.connected;
        connection.Changes.subscribe((state) => this.connected = state);
    }
}  