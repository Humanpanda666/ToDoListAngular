import {Component, OnInit} from '@angular/core';
import { ListDataService } from './list-data.service';
import {MatDialog} from "@angular/material/dialog";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(public listData: ListDataService, public dialog: MatDialog) {}

  ngOnInit() {
    this.listData.loadItems();
  }

  deleteItems(){
    this.listData.deleteAllItem()
  }

}
