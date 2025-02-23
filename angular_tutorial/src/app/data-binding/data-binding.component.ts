import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //string,number,boolean,data
// var      :data type of ="string";
  courseName:string="Angular 18";
  inputType="radio";
  rollNo:number=123;
  isIndian:boolean =false;
  currentate:Date=new Date();
  myClassName:string ="bg-primary";
  constructor(){
  }

  changeCourseName(){
    this.courseName="React Js";
  }
  showAlert(message:string){
    alert(message);
  }
}
