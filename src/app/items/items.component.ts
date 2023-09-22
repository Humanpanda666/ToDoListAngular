import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { ListDataService } from '../list-data.service';
import { AppComponent } from '../app.component';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  constructor(
    public listData: ListDataService,
  ) {}

  items: any;

  ngOnInit(): void {
    this.listData.loadItems();
    this.items = this.listData.listData;
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log(event)
  }
}
