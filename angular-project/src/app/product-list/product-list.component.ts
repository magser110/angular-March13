import { Component, signal } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
// CommonModule in imports if error for ngFor persists
export class ProductListComponent {
  products = signal([
    {name: 'laptop', price: 999},
    {name: 'phone', price: 1000},
    {name: 'mouse', price: 50},
  ]);
}
