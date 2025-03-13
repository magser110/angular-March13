import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature-converter',
  imports: [FormsModule],
  templateUrl: './temperature-converter.component.html',
  styleUrl: './temperature-converter.component.css'
})
export class TemperatureConverterComponent {
  tempInputCelcius: number = 0;
  tempOutputFahrenheit: number = 0;

  tempConverter(){
    this.tempOutputFahrenheit= (this.tempInputCelcius * 9/5) + 32;
    console.log(this.tempOutputFahrenheit);

  }

}
