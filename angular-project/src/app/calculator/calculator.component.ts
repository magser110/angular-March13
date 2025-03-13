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
  mathOperator: string = '+';
  result: number = 0;

  calculate(){
    if(this.mathOperator === '+'){
    this.result =  (+this.inputOne) + (+this.inputTwo);
  }

  else if(this.mathOperator === '-'){
    this.result = (+this.inputOne) - (+this.inputTwo);
  }
  else if(this.mathOperator === '*'){
    this.result = (+this.inputOne) * (+this.inputTwo);
  }
  else if(this.mathOperator === '/'){
    this.result = (+this.inputOne) / (+this.inputTwo);
  }
}
}

