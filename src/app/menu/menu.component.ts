import {Component} from '@angular/core';
import { ListDataService } from '../list-data.service';
import {MatDialog} from "@angular/material/dialog";
import {DialogRemoveComponent} from "../dialog-remove/dialog-remove.component";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(public listData: ListDataService, public dialog: MatDialog) {}

  switchDragging(){
    this.listData.toggleDragging()
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogRemoveComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
