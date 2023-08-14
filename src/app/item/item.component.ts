import { Component, Input, OnInit } from '@angular/core';
import { ListDataService } from '../list-data.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  constructor(
    public listData: ListDataService,
    public appComponent: AppComponent
  ) {}

  items: any;

  ngOnInit(): void {
    this.listData.loadItems();
    this.items = this.listData.listData;
  }

  onDelete(id: any) {
    this.listData.deleteItem(id);
    this.appComponent.getData();
  }
}
