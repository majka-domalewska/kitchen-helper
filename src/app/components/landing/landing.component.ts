import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: [],
})
export class LandingComponent implements OnInit {
  groceries = signal([
    { name: 'Apples', quantity: 10, status: 'pending' },
    { name: 'Bananas', quantity: 5, status: 'pending' },
    { name: 'Carrots', quantity: 7, status: 'pending' },
  ]); // <- semicolon added

  ownedIngredients = signal([
    { name: 'Apples', quantity: 4, status: 'owned' },
    { name: 'Bananas', quantity: 2, status: 'owned' },
    { name: 'Carrots', quantity: 10, status: 'owned' },
  ]); // <- semicolon added

  ngOnInit() {}
}
