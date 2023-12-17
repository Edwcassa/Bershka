import { Injectable } from "@angular/core";
import { ProductsUsecase } from "../domain/products.usecase";
import { ProductsRepository } from "../domain/products.repository";

@Injectable({
    providedIn: 'root'
})
export class ProductsUcase implements ProductsUsecase {

    constructor(private readonly productsRepository: ProductsRepository) {
    }

    getProducts(): Promise<any> {
        return this.productsRepository.getProducts()
    }
}