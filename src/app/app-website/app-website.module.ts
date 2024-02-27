import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppWebsiteRoutingModule} from './app-website-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AppSharedModule} from '../app-shared/app-shared.module';
import {ModalProductComponent} from "./interfaces/modal-product/modal-product.component";
import {ProductsComponent} from "./interfaces/products/products.component";
import {BrowserModule} from "@angular/platform-browser";
import {ProductsRepository} from "./domain/products.repository";
import {ProductsUsecase} from "./domain/products.usecase";
import {ProductsWebRepository} from "./infrastructure/products.repository";
import {ProductsUcase} from "./usecase/products.usecase";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [ProductsComponent, ModalProductComponent],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        AppWebsiteRoutingModule,
        AppSharedModule,
        ReactiveFormsModule
    ],
  providers: [
    {provide: ProductsRepository, useClass: ProductsWebRepository},
    {provide: ProductsUsecase, useClass: ProductsUcase}
  ]
})
export class AppWebsiteModule {
}
