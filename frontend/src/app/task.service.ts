import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //Classe per il collegamento al server per le operazioni CRUD
  private apiUrl = 'http://localhost:8000/tasks';
  //private apiUrl = 'http://localhost:8000/tasks';

  constructor() { }

  getAllTasks() {
    return this.http.get<any[]>(this.baseUrl);
  }

  getTaskById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createTask(taskData: any) {
    return this.http.post<any>(this.baseUrl, taskData);
  }

  updateTask(id: number, taskData: any) {
    return this.http.put<any>(`${this.baseUrl}/${id}`, taskData);
  }

  deleteTask(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}  

/*Vecchio codice
  //Operazioni con richieste Fetch API
  //Legge i Task
  async getTasks(): Promise<any[]> {
    const response = await fetch(this.apiUrl);
    return response.json();
  }

  //Crea Task
  async createTask(task: any): Promise<any> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    return response.json();
  }

  //Aggiorna Task
  async updateTask(task: any): Promise<any> {
    const response = await fetch(`${this.apiUrl}/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    return response.json();
  }

  //Rimuove Task
  async deleteTask(id: number): Promise<void> {
    await fetch(`${this.apiUrl}/${id}`, {
      method: 'DELETE',
    });
  }
}
*/

