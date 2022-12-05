import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../shared/models/item.model'

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Input()item: Item;  // new Item('', null)
  @Output() formSubmit: EventEmitter<Item> = new EventEmitter<Item>();

  isNewItem: boolean;

  constructor() { }

  ngOnInit() {
    if (this.item) {
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new Item('', null);
    }
  }

  onSubmit(form: NgForm){
    //console.log(form);
    this.formSubmit.emit(form.value);
    form.reset();
  }
}