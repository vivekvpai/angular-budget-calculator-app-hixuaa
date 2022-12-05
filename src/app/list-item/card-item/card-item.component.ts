import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "../../shared/models/item.model";

@Component({
  selector: "card-item",
  templateUrl: "./card-item.component.html",
  styleUrls: ["./card-item.component.scss"]
})
export class CardItemComponent implements OnInit {
  @Input() item: Item;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onButtonClick() {
    this.buttonClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }
}
