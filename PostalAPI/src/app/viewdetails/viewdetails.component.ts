import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PincodeService } from '../pincode.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  data:any;
  item:any;
  itemid!:number;

  constructor(private pincodeservice:PincodeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.printData();
    this.route.params.subscribe((params) => {
      this.itemid=params['id'];
    });
  }

  printData(){
    this.pincodeservice.getDetailsUsingPin().subscribe((response) => {
        this.data=response;
      })
    }
}


