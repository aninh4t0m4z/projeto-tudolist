import { UpdateTaskComponent } from './CrudTask/update-task/update-task.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home" , component: HomeComponent},
  {path:"" , redirectTo: "home", pathMatch:"full"},
  {path:"Update/:id" , component: UpdateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
