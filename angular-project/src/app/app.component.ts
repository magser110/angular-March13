import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FavoriteColorsComponent } from './favorite-colors/favorite-colors.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { QuoteRotatorComponent } from './quote-rotator/quote-rotator.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UserNameAgeComponent } from './user-name-age/user-name-age.component';
import { NewCountdownComponent } from './new-countdown/new-countdown.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, TaskListComponent, FavoriteColorsComponent, TemperatureConverterComponent, CalculatorComponent, QuoteRotatorComponent, ProductListComponent, ShoppingListComponent, UserNameAgeComponent, NewCountdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
}
