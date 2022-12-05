import { Component, OnInit, Input, Inject } from '@angular/core';
import { Item } from '../shared/models/item.model'
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  constructor(
    public dialofRef: MatDialogRef<EditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item: Item) { }

  ngOnInit() {
  }

  onSubmitted(updatedItem: Item) {
    this.dialofRef.close(updatedItem);
  }
}