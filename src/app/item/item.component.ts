import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { ListDataService } from '../list-data.service';
import { AppComponent } from '../app.component';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  constructor(
    public listData: ListDataService,
    public appComponent: AppComponent,
    private cdr: ChangeDetectorRef
  ) {}

  items: any;

  ngOnInit(): void {
    this.listData.loadItems();
    this.items = this.listData.listData;
  }

  onDelete(id: any, event: any) {
    const targetElement = event.parentElement.parentElement as HTMLElement;
    targetElement.classList.add('deleted')

    setTimeout(() => {
      this.listData.deleteItem(id);
      this.appComponent.getData();
    }, 490);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
