import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  
   ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(
      tasks => {
        this.tasks = tasks;
      },
      error => {
        console.error('Errore durante il recupero dei task:', error);
      }
    );
  }
  
   deleteTask(tasks: any): void {
    this.taskService.deleteTask(tasks).subscribe(
      () => {
        // Rimuovi il task dall'array tasks
        this.tasks = this.tasks.filter(task => task.id !== tasks);
      },
      error => {
        console.error('Errore durante l\'eliminazione del task:', error);
      }
    );
  }
}
/*
  constructor(private taskService: TaskService) { }

  //Recupera Task
  async ngOnInit(): Promise<void> {
    this.tasks = await this.taskService.getTasks();
  }
  
  

  //Elmina Task
  async deleteTask(id: number): Promise<void> {
    await this.taskService.deleteTask(id);
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
*/

/*
//Codice non funzionante!!!
import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  newTask = {
    id: null,
    title: '',
    description: '',
    due_date: '',
    priority: ''
  };

  constructor() { }

  async ngOnInit(): Promise<void> {
    await this.fetchTasks();
  }

  async fetchTasks(): Promise<void> {
    try {
      const response = await fetch('http://localhost:8000/api/tasks');
      if (response.ok) {
        this.tasks = await response.json();
      } else {
        console.error('Errore durante il recupero dei task:', response.statusText);
      }
    } catch (error) {
      console.error('Errore di rete:', error);
    }
  }

  async addTask(): Promise<void> {
    try {
      const response = await fetch('http://localhost:8000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.newTask)
      });
      if (response.ok) {
        await this.fetchTasks();
        this.newTask = {
          id: null,
          title: '',
          description: '',
          due_date: '',
          priority: ''
        };
      } else {
        console.error('Errore durante l\'aggiunta del task:', response.statusText);
      }
    } catch (error) {
      console.error('Errore di rete:', error);
    }
  }

  async deleteTask(taskId: number): Promise<void> {
    try {
      const response = await fetch(`http://localhost:8000/api/tasks/${taskId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        await this.fetchTasks();
      } else {
        console.error('Errore durante l\'eliminazione del task:', response.statusText);
      }
    } catch (error) {
      console.error('Errore di rete:', error);
    }
  }
}
*/

/*
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) { }

  //Recupera Task
  async ngOnInit(): Promise<void> {
    this.tasks = await this.taskService.getTasks();
  }

  //Elmina Task
  async deleteTask(id: number): Promise<void> {
    await this.taskService.deleteTask(id);
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
*/
