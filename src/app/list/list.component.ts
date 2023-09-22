import { Component, OnInit, ViewChild } from '@angular/core';
import { ListDataService } from '../list-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @ViewChild('newEntry') inputName: any;

  constructor(
    public listData: ListDataService,
  ) {}

  items: any;

  ngOnInit(): void {
    this.items = this.listData.listData;
  }

  addItem(value: string) {
    if (value == '') {
      return;
    } else {
      this.listData.addItem(value);
      this.inputName.nativeElement.value = '';
    }
  }
}
