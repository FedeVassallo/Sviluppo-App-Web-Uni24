import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})

//Struttura Task
export class TaskFormComponent {
  task = {
    title: '',
    description: '',
    due_date: '',
    priority: 'media'
  };

  constructor(private taskService: TaskService, private router: Router) { }

  async createTask(): Promise<void> {
    await this.taskService.createTask(this.task);
    this.router.navigate(['/tasks']);
  }
}
