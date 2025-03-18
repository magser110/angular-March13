import { Component } from '@angular/core';

@Component({
  selector: 'app-new-countdown',
  imports: [],
  templateUrl: './new-countdown.component.html',
  styleUrl: './new-countdown.component.css'
})
export class NewCountdownComponent {

  timeLimit = 10;
  time = this.timeLimit;
  timeLeft = this.timeLimit;
  interval: any;

  startCountdown(){
   this.interval = setInterval(() => {
    if (this.time === 0) {

      clearInterval(this.interval)
    } else {
      this.time--;

    }
  }, 1000);
}
}
