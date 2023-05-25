import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  title : string ="";
  @Input() taskForm = new FormGroup({});
  @Output() dialog = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {
  }

  close() {

  }

  save() {

  }

  onFormSubmit(){
    this.dialog.emit("hidden")
  }


}
