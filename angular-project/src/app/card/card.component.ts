import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title: WritableSignal<string> = signal('');
  description: WritableSignal<string> = signal('');
  imageUrl: WritableSignal<string> = signal('');
  onAction: () => void = () => {};

  setConfig(
    title: string,
    description: string,
    imageUrl: string,
    onAction: () => void
  ) {
    this.title.set(title);
    this.description.set(description);
    this.imageUrl.set(imageUrl);
    this.onAction = onAction;
  }
}
// in the case below just understand *ngIf as a directive that conditionally renders the image based on the imageUrl signal.