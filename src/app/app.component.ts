import { Component, OnInit, inject } from '@angular/core';
import { ListDataService } from './list-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todolist';
  test: any;

  count: any;

  constructor(public listData: ListDataService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.count = this.listData.countItems();
    console.log(this.count);
  }
}
