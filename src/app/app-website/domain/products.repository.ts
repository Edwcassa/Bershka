export abstract class ProductsRepository {
    public abstract getProducts(): Promise<any>;
}