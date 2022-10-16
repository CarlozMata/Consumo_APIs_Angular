import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OutgoingMessage } from 'http';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
<<<<<<< HEAD
      name:'',
=======
      name: '',
>>>>>>> 23c694ba4d07a572d2eb27f8482b23bb86de63d4
    },
    description: ''
  };
  @Output() addedProduct = new EventEmitter<Product>();
<<<<<<< HEAD
  @Output() showProduct = new  EventEmitter<string>();
=======
  @Output() showProduct = new EventEmitter<string>();
>>>>>>> 23c694ba4d07a572d2eb27f8482b23bb86de63d4

  constructor() { }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
<<<<<<< HEAD

  onShowDetail() {
    this.showProduct.emit(this.product.id);
  }

=======
  onShowDetail() {
    this.showProduct.emit(this.product.id);
  }
>>>>>>> 23c694ba4d07a572d2eb27f8482b23bb86de63d4
}
