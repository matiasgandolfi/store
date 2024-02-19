import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input({required: true}) product!: Product;


  addToCartHandler(){
    console.log('click from child');
    this.addToCart.emit("hola este es un msg desde el hijo " + this.product.title);
  }

  @Output() addToCart = new EventEmitter();

}
