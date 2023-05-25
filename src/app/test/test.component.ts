import { Component , OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title : string ="";
  taskForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor() {

  }

  ngOnInit() {
  }

  close() {

  }

  save() {

  }

  onFormSubmit(){
    console.log('Name:' + this.taskForm.get('name')!.value);
    const detail = document.getElementsByTagName("details");
    detail[0].removeAttribute("open");
  }

}
