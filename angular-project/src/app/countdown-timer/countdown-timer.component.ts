import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.css'
})

let time = 0;
let timeLimit = 10;
let timeLeft = timeLimit;
let timerInterval;

export class CountdownTimerComponent {
//   time = timeLimit;

//   startCountdown(){
//    interval = setInterval(() => {
//     if (time === 1) {

//       clearInterval(this.interval)
//     } else {
//       time--;

//     }
//   }, 1000);
// }
}
