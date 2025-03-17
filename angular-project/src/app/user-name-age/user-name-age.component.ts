import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-name-age',
  imports: [FormsModule],
  templateUrl: './user-name-age.component.html',
  styleUrl: './user-name-age.component.css'
})
export class UserNameAgeComponent {
  name: string = '';
  age: number | null = null;

  updateName(){
    return this.name;
  }

  updateAge() {
    return this.age;
  }

}
