import { Component, OnInit, ViewChild } from '@angular/core';
import { ListDataService } from '../list-data.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @ViewChild('newEntry') inputName: any;

  constructor(
    public listData: ListDataService,
    public appComponent: AppComponent
  ) {}

  items: any;

  ngOnInit(): void {
    this.items = this.listData.listData;
    console.log(this.items);
  }

  addItem(value: any) {
    if (value == '') {
      return;
    } else {
      this.listData.addItem(value);
      console.log('Value: ' + value);
      this.inputName.nativeElement.value = '';
      this.appComponent.getData();
    }
  }
}
