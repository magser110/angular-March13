import { Component, effect } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  childMessage: string = '';

  constructor(){
    effect(() => {
      if (this.childMessage){
        console.log('parent recieved message:', this.childMessage);

      }
    });
  }

  // handleChildEvent() {
  //   console.log('child button clicked');

  // }

}
