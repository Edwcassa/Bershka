import { Injectable } from "@angular/core";
import { ProductsRepository } from "../domain/products.repository";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProductsWebRepository implements ProductsRepository {

    environment = {
        url: 'https://tienda-api-chi.vercel.app/api/',
    }

    constructor(private readonly http: HttpClient) {
    }

    getProducts(): Promise<any> {
        return lastValueFrom(this.http
            .get<any>(this.environment.url + 'v1/products'))
    }
}