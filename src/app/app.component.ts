import {Component, OnInit, OnChanges, SimpleChange, SimpleChanges, ChangeDetectorRef} from '@angular/core';
import { ListDataService } from './list-data.service';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialog} from "@angular/material/dialog";
import {DialogRemoveComponent} from "./dialog-remove/dialog-remove.component"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'todolist'

  draggingDisabled = true;
  private _count: number = 0;
  set count(value:number){
    this._count = value
  }
  constructor(public listData: ListDataService, public dialog: MatDialog, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.listData.loadItems();
    this.getData();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Change detected")
  }

  deleteItems(){
    this.listData.deleteAllItem()
  }

  getData() {
    this.count = this.listData.countItems();
  }

  switchDragging(){
    this.draggingDisabled = !this.draggingDisabled
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogRemoveComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
