import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ItemsComponent} from './items/items.component';
import { ListComponent } from './list/list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { DragDropModule} from "@angular/cdk/drag-drop";
import {MatMenu, MatMenuModule} from "@angular/material/menu";
import {MatProgressBarModule} from '@angular/material/progress-bar';


import { FormsModule } from '@angular/forms';
import { DialogRemoveComponent } from './dialog-remove/dialog-remove.component';
import {ItemComponent} from "./item/item.component";

@NgModule({
  declarations: [AppComponent, ItemComponent, ListComponent, DialogRemoveComponent, ItemComponent, ItemsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatDividerModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    FormsModule,
    DragDropModule,
    MatMenuModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
