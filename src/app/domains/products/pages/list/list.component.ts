import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    imports: [ProductComponent, CommonModule]
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 100,
        image: 'https://picsum.photos/640/640?=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 100,
        image: 'https://picsum.photos/640/640?=24',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 100,
        image: 'https://picsum.photos/640/640?=25',
        creationAt: new Date().toISOString()
      }
  ];
  this.products.set(initProducts);
  }


  fromChild(event : String){
    console.log("Estamos en el padre")
    console.log(event)
  }
}
