import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../expense.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Monthly Summary
  summary = {
    totalIncome: 20000,
    totalExpense: 12500,
    remaining: 7500,
    budget: 18000
  };
  editSummary = false;
  tempSummary = { ...this.summary };

  // Spending Overview
  spending = [
    { category: 'Food', percentage: 30 },
    { category: 'Travel', percentage: 25 },
    { category: 'Bills', percentage: 20 },
    { category: 'Others', percentage: 25 }
  ];
  editSpending = false;
  tempSpending = this.spending.map(item => ({ ...item }));

  // Bar Chart
  barMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', '...'];
  barValues = [2000, 3000, 1000, 5000, 1500, 0];
  editBar = false;
  tempBarValues = [...this.barValues];

  // Expense List
  expenses: {
    title: string;
    amount: number;
    date: string;
    category: string;
    type: string;
  }[] = [];
  searchText = '';
  filteredExpenses: {
    title: string;
    amount: number;
    date: string;
    category: string;
    type: string;
  }[] = [];
  editExpenses = false;
  tempExpenses: {
    title: string;
    amount: number;
    date: string;
    category: string;
    type: string;
  }[] = [];

  showAddExpenseForm = false;

  newExpense = {
    title: '',
    amount: 0, // <-- change from null to 0
    date: '',
    category: '',
    type: 'Expense'
  };

  categories = ['Food', 'Travel', 'Bills', 'Income', 'Others'];
  types = ['Income', 'Expense'];

  constructor(
    private expenseService: ExpenseService,
    private router: Router
  ) {
    this.expenses = this.expenseService.getExpenses();
    this.filteredExpenses = this.expenses;
  }

  onEdit(table: string) {
    if (table === 'summary') {
      this.tempSummary = { ...this.summary }; // copy current values for editing
      this.editSummary = true;
    }
    if (table === 'spending') {
      this.tempSpending = this.spending.map(item => ({ ...item }));
      this.editSpending = true;
    }
    if (table === 'bar') {
      this.tempBarValues = [...this.barValues];
      this.editBar = true;
    }
    if (table === 'expenseList') {
      this.tempExpenses = this.expenses.map(item => ({ ...item }));
      this.editExpenses = true;
    }
  }

  // Monthly Summary
  onSaveSummary() {
    this.summary = { ...this.tempSummary }; // save changes
    this.editSummary = false;
  }
  onCancelSummary() {
    this.editSummary = false;
  }

  // Spending Overview
  onSaveSpending() {
    this.spending = this.tempSpending.map(item => ({ ...item }));
    this.editSpending = false;
  }
  onCancelSpending() {
    this.editSpending = false;
  }

  // Bar Chart
  onSaveBar() {
    this.barValues = [...this.tempBarValues];
    this.editBar = false;
  }
  onCancelBar() {
    this.editBar = false;
  }

  // Expense List
  onSaveExpenses() {
    // Save edited expenses
    this.expenses = this.tempExpenses.map(item => ({ ...item }));
    this.filteredExpenses = [...this.expenses];
    this.editExpenses = false;

    // Recalculate totalExpense (sum of all 'Expense' type)
    const totalExpense = this.expenses
      .filter(e => e.type === 'Expense')
      .reduce((sum, e) => sum + Number(e.amount), 0);

    this.summary.totalExpense = totalExpense;
    this.summary.remaining = this.summary.totalIncome - totalExpense;
  }
  onCancelExpenses() {
    this.editExpenses = false;
  }

  onSearch() {
    const text = this.searchText.toLowerCase();
    this.filteredExpenses = this.expenses.filter(e =>
      e.title.toLowerCase().includes(text) ||
      e.category.toLowerCase().includes(text) ||
      e.type.toLowerCase().includes(text)
    );
  }

  onAddExpense() {
    this.showAddExpenseForm = true;
    // Reset form
    this.newExpense = {
      title: '',
      amount: 0, // <-- change from null to 0
      date: '',
      category: '',
      type: 'Expense'
    };
  }

  onSaveNewExpense() {
    this.expenses.unshift({ ...this.newExpense });
    this.filteredExpenses = [...this.expenses];
    this.showAddExpenseForm = false;

    // Recalculate totalExpense and remaining
    const totalExpense = this.expenses
      .filter(e => e.type === 'Expense')
      .reduce((sum, e) => sum + Number(e.amount), 0);

    this.summary.totalExpense = totalExpense;
    this.summary.remaining = this.summary.totalIncome - totalExpense;
  }

  onCancelNewExpense() {
    this.showAddExpenseForm = false;
  }
}
