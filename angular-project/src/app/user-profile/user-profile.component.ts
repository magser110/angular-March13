import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  template: `
  <div class="card">
  <h2>{{ name }} </h2>
  <p>Age: {{ age }} </p>
  </div>
  `,
  styles: [
    `
    .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    max-width: 300px;
    margin: 0 auto;
    box-shadow: 0 2px 4px rbga(0,0,0,0.1);
    }
    h2 {
      margin: 0 0 8px;
    }
    p {
      margin: 0;
      color: #666;
    }
    `,
  ]
})
export class UserProfileComponent {
  name: string = 'john doe'
  age: number = 30;
}

