import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FavoriteColorsComponent } from './favorite-colors/favorite-colors.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { QuoteRotatorComponent } from './quote-rotator/quote-rotator.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, TaskListComponent, FavoriteColorsComponent, TemperatureConverterComponent, CalculatorComponent, QuoteRotatorComponent, ProductListComponent, CountdownTimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
}
