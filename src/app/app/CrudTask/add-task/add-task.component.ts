import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud-service.service';
import { TaskList } from '../Model/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  emptyInput: boolean = false;
  addTask: TaskList = {
    task: "",
    checked: false
}


  constructor(private service: CrudService) { }

  ngOnInit(): void {
  }
  newTask(): void {

    if (this.addTask.task == '') {
      this.emptyInput = true;
      return;
    }



    this.service.newTask(this.addTask).subscribe(() => {

      location.reload()
    });

    this.cleanInput();

  }


  onKeyUp(){
    this.emptyInput = false;

  }

  cleanInput() {
    this.addTask.task = '';
  }

}
