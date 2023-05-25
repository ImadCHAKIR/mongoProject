import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  constructor(private http: HttpClient) { }

  getTaskListByUser(userId: String | null){
    return this.http.get<Task[]>("http://localhost:40000/task?id="+userId);
  }
}
