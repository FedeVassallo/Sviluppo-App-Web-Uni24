import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit {
  tasks: any[] = [];
  taskData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.tasks = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTaskById(this.tasks).subscribe(
      task => {
        this.taskData = task;
      },
      error => {
        console.error('Errore durante il recupero del task:', error);
      }
    );
  }

  updateTask(): void {
    this.taskService.updateTask(this.tasks, this.taskData).subscribe(
      () => {
        // Azioni da eseguire dopo l'aggiornamento del task (reindirizzamento, aggiornamento della lista, ecc.)
        console.log('Task aggiornato con successo!');
      },
      error => {
        console.error('Errore durante l\'aggiornamento del task:', error);
      }
    );
  }
}

