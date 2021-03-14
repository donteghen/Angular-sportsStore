import { CheckoutComponent } from './checkout.component';
import { CartSummaryComponent } from './cartSummary.component';
import { CounterDirective } from './counter.directive';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CartDetailComponent } from './cartDetail.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CheckoutComponent, CartDetailComponent],
    exports: [StoreComponent, CheckoutComponent, CartDetailComponent]
    })
    export class StoreModule { }