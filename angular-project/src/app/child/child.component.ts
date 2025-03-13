import { Component, Input, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  message: WritableSignal<string> = signal('');

  notifyParent(){
    this.message.set('child button was clicked')
  }

  // @Input() notifyParent!: () => void;

}
