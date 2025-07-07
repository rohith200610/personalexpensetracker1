import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  private expenses = [
    { title: 'Coffee', amount: 150, date: '2025-06-26', category: 'Food', type: 'Expense' },
    { title: 'Salary', amount: 10000, date: '2025-06-25', category: 'Income', type: 'Income' },
    { title: 'Electricity', amount: 1200, date: '2025-06-24', category: 'Bills', type: 'Expense' }
  ];

  getExpenses() {
    return this.expenses;
  }

  addExpense(expense: any) {
    this.expenses.unshift(expense);
  }
}