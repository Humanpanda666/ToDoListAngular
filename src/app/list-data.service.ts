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

  addItem(taskName: string) {
    this.listData.push({ taskName: taskName, done: false });
    console.log('Taskname ' + taskName);
  }

  deleteItem(id: any) {
    this.listData.splice(id, 1);
  }

  markDone(id: any) {
    this.listData[id].done = !this.listData[id].done;
  }

  countItems(): any {
    return this.listData.length;
  }
}
