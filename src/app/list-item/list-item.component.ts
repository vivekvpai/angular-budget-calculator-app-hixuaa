import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../shared/models/item.model'
import { MatDialog } from '@angular/material/dialog';
import { EditItemComponent } from '../edit-item/edit-item.component';


@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent implements OnInit {


  @Input() Items: Item[];
  @Output() delete: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  ondelete(item: Item) {
    this.delete.emit(item);
  }

  onCardClick(item: Item) {
    const dialogRef = this.dialog.open(EditItemComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        //this.Items[this.Items.indexOf(item)] = result;
        this.update.emit({
          old: item,
          new: result
        })
      }
    })
  }

}

export interface UpdateEvent {
  old: Item;
  new: Item;
}