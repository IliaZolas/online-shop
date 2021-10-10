import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1,'Product Name','Product Description', 120),
    new Product(2,'Product Name','Product Description', 120),
    new Product(3,'Product Name','Product Description', 120),
    new Product(4,'Product Name','Product Description', 120),
    new Product(5,'Product Name','Product Description', 120),
    new Product(6,'Product Name','Product Description', 120),
    new Product(6,'Product Name','Product Description', 120),

  ]

  constructor() { }
  
  getProducts(): Product[] {
    return this.products
  }
}
