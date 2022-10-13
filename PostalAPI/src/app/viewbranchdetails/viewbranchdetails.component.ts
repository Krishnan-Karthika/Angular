import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PincodeService } from '../pincode.service';

@Component({
  selector: 'app-viewbranchdetails',
  templateUrl: './viewbranchdetails.component.html',
  styleUrls: ['./viewbranchdetails.component.css']
})
export class ViewbranchdetailsComponent implements OnInit {
  data:any;
  itemid!:number;

  constructor(private pincodeservice:PincodeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.Printdata();
    this.route.params.subscribe((params) => {
      this.itemid=params['id'];
    });
  }

  Printdata(){
    this.pincodeservice.getDetailsUsingBranch().subscribe({
      next:response => {
        console.log(response);
        this.data=response;
        console.log(this.data);
      },
    });
  }

}
