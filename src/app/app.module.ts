import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BudgetCalculatorComponent } from './budget-calculator/budget-calculator.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CardItemComponent } from './list-item/card-item/card-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import editItemComponentHtml from './edit-item/edit-item.component.html';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatDialogModule ],
  declarations: [ AppComponent, HelloComponent, BudgetCalculatorComponent, AddItemComponent, ListItemComponent, CardItemComponent, EditItemComponent ],
  entryComponents: [EditItemComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
