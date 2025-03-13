import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  newTask: string = '';
  taskList = signal<string[]>([
    'walk the dog',
    'mow lawn',
    'do laundry'
  ]);

  addTask(){
      this.taskList.update((tasks) => [...tasks, this.newTask] );
  }
}
