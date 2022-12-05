import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/model/item.model';
import { UpdateEvent } from '../list-item/list-item.component'; 

@Component({
  selector: 'budget-calculator',
  templateUrl: './budget-calculator.component.html',
  styleUrls: ['./budget-calculator.component.scss']
})
export class BudgetCalculatorComponent implements OnInit {
  
  Items: Item[] = new Array<Item>();
  totalBudget: number = 0;

  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: Item){
    this.Items.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: Item) {
    let index= this.Items.indexOf(item);
    this.Items.splice(index, 1);
    this.totalBudget -= item.amount;

  }

  updateItem(updateEvent: UpdateEvent) {
    this.Items[this.Items.indexOf(updateEvent.old)] = updateEvent.new;

    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }
}