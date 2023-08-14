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
    this.listData = JSON.parse(localStorage.getItem('tasks') || '{}');
  }

  addItem(taskName: string) {
    this.listData.push({ taskName: taskName, done: false });
    console.log('Taskname ' + taskName);
    localStorage.setItem('tasks', JSON.stringify(this.listData));
  }

  deleteItem(id: any) {
    this.listData.splice(id, 1);
    localStorage.setItem('tasks', JSON.stringify(this.listData));
  }

  markDone(id: any) {
    this.listData[id].done = !this.listData[id].done;
    localStorage.setItem('tasks', JSON.stringify(this.listData));
  }

  countItems(): any {
    return this.listData.length;
  }
}
