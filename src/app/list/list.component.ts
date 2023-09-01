import { Component, OnInit, ViewChild } from '@angular/core';
import { ListDataService } from '../list-data.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-search-bar',
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
  }

  addItem(value: string) {
    if (value == '') {
      return;
    } else {
      this.listData.addItem(value);
      this.inputName.nativeElement.value = '';
      this.appComponent.getData();
    }
  }
  placeholder = 'Chujar'
  test(value:any) {
    console.log(value)
    for(let i = 0; i < value.length; i++) {
      console.log(i)
      this.placeholder = this.placeholder.slice(0, -1)
      console.log(this.placeholder)
    }
  }
}
