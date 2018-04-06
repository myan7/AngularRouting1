import { Injectable } from '@angular/core';
import {Product} from './models/product';

@Injectable()
export class ProductService {

  constructor() { }

  public getProducts() {
    let products: Product[];
    products = [
      new Product(1, 'SIM card', 500),
      new Product(2, 'laptop', 1200),
      new Product(3, 'Toyota Camry XSE', 40000)
    ]
    return products;
  }

  public getProduct(id) {
    const products: Product[] = this.getProducts();
    return products.find(p => p.productId === id);
  }

}
