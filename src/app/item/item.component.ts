import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {ListDataService} from "../list-data.service";
import {AppComponent} from "../app.component";

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
    public appComponent: AppComponent,
    private cdr: ChangeDetectorRef
  ) {}

  onDelete(id: any, event: any) {
    const targetElement = event.parentElement.parentElement as HTMLElement;
    targetElement.classList.add('deleted')

    setTimeout(() => {
      this.listData.deleteItem(id);
      this.appComponent.getData();
    }, 490);
  }
}
