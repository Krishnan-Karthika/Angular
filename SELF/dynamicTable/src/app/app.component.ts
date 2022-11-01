import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicTable';

  constructor(){
    this.getData();
  }

  array: any = [
    {
      name:'A',
      address:'address A',
      email:'email A'
    },
    {
      name:'B',
      address:'address B',
      email:'email B'
    },
    {
      name:'C',
      address:'address C',
      email:'email C'
    }
  ];

  tabKeys:any = []
  tabValues:any = []
  getData(){
    this.array.forEach((element:any) => {
      this.tabKeys = Object.keys(element);
      this.tabValues.push(Object.values(element));
    });
  }

}
