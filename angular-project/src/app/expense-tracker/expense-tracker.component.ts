import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-tracker',
  imports: [],
  templateUrl: './expense-tracker.component.html',
  styleUrl: './expense-tracker.component.css'
})
export class ExpenseTrackerComponent {
  expenses = [{ description: 'Groceries', amount: 50 }];
  newDescription: string = '';
  newAmount: number | null = null;

  addExpense(){
    if (this.newDescription && this.newAmount !== null){
      this.expenses.push({description: this.newDescription, amount: this.newAmount});
    }
  }
  addAmount(): number{
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }
}
