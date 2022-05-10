import { CrudService } from './../crud-service.service';
import { TaskList } from './../Model/task';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {

  emptyInput: boolean = false;
  taskUpdate: TaskList = {
    task: ''
  };

  constructor(
    private service: CrudService ,
    private router: Router,
    private id: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const takeId = this.id.snapshot.paramMap.get('id');
    this.service.readById(String(takeId)).subscribe((task) => {
      this.taskUpdate = task;
    });
  }

  updateTask(): void {
    if(this.taskUpdate.task == ''){
     this.emptyInput = true;
      return;
    }
    this.service.updateTask(this.taskUpdate).subscribe(() => {
      this.cancel();
    });
  }
  onKeyUp(){
    this.emptyInput = false;
  }

  cancel(): void {
    this.router.navigate(['/home']);

  }

}



