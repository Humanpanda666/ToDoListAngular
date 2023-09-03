import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListDataService {
  listData = [
    {
      taskName: 'Clean the dishes',
      done: true,
    },
    {
      taskName: 'Program some more',
      done: false,
    },
    {
      taskName: 'Test some stuff',
      done: true,
    },
  ];

  loadItems() {
    if(localStorage.getItem('tasks')?.length !== 0){
      this.listData = JSON.parse(localStorage.getItem('tasks') || '{}');
    }
  }

  addItem(taskName: string) {
    this.listData.push({ taskName: taskName, done: false });
    this.updateLocalStorage()
  }

  deleteItem(id: any) {
    this.listData.splice(id, 1);
    this.updateLocalStorage()
  }

  deleteAllItem(){
    while (this.listData.length > 0) {
      this.listData.splice(0, 1); // Remove one element at index 0
    }
    this.updateLocalStorage()
  }

  markDone(id: any) {
    this.listData[id].done = !this.listData[id].done;
    this.updateLocalStorage()
  }

  updateLocalStorage():void {
    localStorage.setItem('tasks', JSON.stringify(this.listData));
  }

  countItems(): any {
    return this.listData.length;
  }

  getFinishedItems(){
    let finished: number = 0
    for(let i=0; i<this.listData.length;i++){
      if(this.listData[i].done){
        finished++
      }
    }
    return finished
  }

  getPercentageFinished(){
    let onePercent = this.countItems()/100
    return this.getFinishedItems()/onePercent
  }
}
