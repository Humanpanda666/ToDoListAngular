import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AppComponent} from "../app.component";
import {ListDataService} from "../list-data.service";

@Component({
  selector: 'app-dialog-remove',
  templateUrl: './dialog-remove.component.html',
  styleUrls: ['./dialog-remove.component.scss']
})
export class DialogRemoveComponent {
  constructor(public dialogRef: MatDialogRef<DialogRemoveComponent>, public appComponent: AppComponent) {}
  testingFromDialog(){
    this.appComponent.deleteItems()
  }


}
