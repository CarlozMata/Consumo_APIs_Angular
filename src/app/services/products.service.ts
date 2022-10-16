import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
<<<<<<< HEAD
    return this.http.get<Product[]>('https://young-sands-07814.herokuapp.com/api/products');
=======
    return this.http.get<Product[]>(this.apiUrl);
  }
  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}`);
>>>>>>> 23c694ba4d07a572d2eb27f8482b23bb86de63d4
  }
  getProduct(id:string) {
    return this.http.get<Product>()
  }
}