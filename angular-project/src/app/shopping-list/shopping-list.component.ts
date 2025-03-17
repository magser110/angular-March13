import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  imports: [FormsModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  newItem: string = '';
  groceryList = signal<string[]>([
    'cheese',
    'tortillas',
    'avocado'
  ]);

  addNewItem(){
    this.groceryList.update((items) => [...items, this.newItem]);
  }

}
