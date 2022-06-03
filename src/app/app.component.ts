import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showAndHide: boolean = false;
  password:string="";
  count:number=1;
  array:number[]=[];
  array1:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  onClick() {
    this.showAndHide = !this.showAndHide;
    this.password="Password=Shubham";
    this.array.push(this.count);
    this.count=this.count+1;

  }
  getColor(number: number){
    return number>5 ?'blue':'transparent';
  }
  getColor1(number1: number){
    return number1%2 ?'blue':'yellow';
  }

}
