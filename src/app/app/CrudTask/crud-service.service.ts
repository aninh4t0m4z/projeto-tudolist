
import {HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core'
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment'
import { TaskList } from "./Model/task";



@Injectable({providedIn: 'root'})

export class CrudService
{
  private readonly baseUrl = environment["apiTodoItem"];
  constructor(private http: HttpClient)
  {

  }
  read(): Observable<TaskList[]> {
    return this.http.get<TaskList[]>(this.baseUrl);
  }

  readById(id: string): Observable<TaskList>{
    return this.http.get<TaskList>(`${this.baseUrl}/${id}`)

  }

  newTask(newTask: TaskList): Observable<TaskList> {
    return this.http.post<TaskList>(this.baseUrl, newTask);
  }

  updateTask(task: TaskList): Observable<TaskList>{
    const url = `${this.baseUrl}/${task.id}`
    return this.http.put<TaskList>(url, task)
  }

  delete(id: number): Observable<TaskList> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<TaskList>(url);
  }




}

