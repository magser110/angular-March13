import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorite-colors',
  imports: [FormsModule],
  templateUrl: './favorite-colors.component.html',
  styleUrl: './favorite-colors.component.css'
})
export class FavoriteColorsComponent {
    newColor: string = '';
    colorList = signal<string[]>([
      'pink',
      'blue',
      'sage'
    ]);

    addColor(){
      this.colorList.update((colors) => [...colors, this.newColor]);
    }
}
