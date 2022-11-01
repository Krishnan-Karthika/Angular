import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicTable';

  constructor(){
    // since this fun should be loaded on onLoad, it should be called from Constructor or ngOnit
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
