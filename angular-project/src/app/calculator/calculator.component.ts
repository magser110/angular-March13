import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  inputOne: number = 0;
  inputTwo: number = 0;

  add(inputOne: number, inputTwo: number){
    return inputOne + inputTwo;
  }

  subract(inputOne: number, inputTwo: number){
    return inputOne - inputTwo;
  }

  multiply(inputOne: number, inputTwo: number){
    return inputOne * inputTwo;
  }

  divide(inputOne: number, inputTwo: number){
    return inputOne / inputTwo;
  }
}
