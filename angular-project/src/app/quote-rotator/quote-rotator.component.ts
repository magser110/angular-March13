import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-quote-rotator',
  imports: [],
  templateUrl: './quote-rotator.component.html',
  styleUrl: './quote-rotator.component.css'
})
export class QuoteRotatorComponent {
  quotes = signal([
    'teehee',
    'hello',
    'byeeee',
    ':)'
  ])
  currantQuote = signal(this.quotes()[0]);

  nextQuote(){
    const currentIndex = this.quotes().indexOf(this.currantQuote());
    const nextIndex = (currentIndex +1) % this.quotes().length;
    this.currantQuote.set(this.quotes()[nextIndex]);

  }
}
