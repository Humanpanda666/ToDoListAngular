import { Component, OnInit } from '@angular/core';
import { ListDataService } from './list-data.service';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todolist'

  draggingDisabled = true;
  count: any;

  constructor(public listData: ListDataService) {}

  ngOnInit() {
    this.listData.loadItems();
    this.getData();
  }

  deleteItems(){
    this.listData.deleteAllItem()
    this.getData()
  }

  getData() {
    this.count = this.listData.countItems();
  }

  switchDragging(){
    this.draggingDisabled = !this.draggingDisabled
  }
}
