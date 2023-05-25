import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Kanban } from '../model/kanban';
import { KanbanService } from '../services/kanban.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TaskService } from '../services/task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  animal: string="";
  name: string="";
  dialog = "hidden"
  todo:String[] = []
  inProgress:String[] = [];
  done:String[] = [];

  taskForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    color: new FormControl('')
  });

  constructor(
    private authService: AuthService,
    private taskservice: TaskService
  ) { }

  ngOnInit() {
    this.taskservice.getTaskListByUser(localStorage.getItem('id')).subscribe( result =>{
      console.log("result: "+result)
      result.map(item =>{
        if (item.status =="todo"){ this.todo.push(item.title)}
        else if (item.status =="inProgress"){ this.inProgress.push(item.title)}
        else if (item.status =="done"){ this.done.push(item.title)}
      })
    })
  }

  openDialog(status:any): void {
    console.log(status)
    this.dialog = "active"
  }

  hideDialog(dialog : any):void{
    this.dialog = dialog
  }

  logout(){
    this.authService.logout();
  }
}

