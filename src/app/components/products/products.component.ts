import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  showProductDetail = false;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
<<<<<<< HEAD

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }
  onShowDetail(id:string) {
    
  }

=======
  toogleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }
  onShowDetail(id: string) {
    this.productsService.getProduct(id)
    .subscribe(data => {
      console.log('product', data);
    })
  }
>>>>>>> 23c694ba4d07a572d2eb27f8482b23bb86de63d4
}
