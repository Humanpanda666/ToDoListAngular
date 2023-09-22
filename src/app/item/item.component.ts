import { Component, Input} from '@angular/core';
import {ListDataService} from "../list-data.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() item:any;
  @Input() id:any;

  constructor(
    public listData: ListDataService,
  ) {}

  onDelete(id: any, event: any) {
    const targetElement = event.parentElement.parentElement as HTMLElement;
    targetElement.classList.add('deleted')

    //Delete item after animation
    setTimeout(() => {
      this.listData.deleteItem(id);
    }, 490);
  }
}
