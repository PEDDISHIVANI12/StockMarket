import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  countries: any;
  lowarray: any = [];
  Data: any;
  last: any;
  adj: any;
  low: any = [];
  lst: any;
  max: any;
  min: any;
  
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }
  constructor(private csvservice : CommonService,private router:Router) { }

  ngOnInit(): void {
    this.show();
  }
  
  show(){
  this.csvservice.getNiftydata().subscribe((data: any) => {this.countries = data;
  for (let index = 0; index < this.countries.length; index++) {
    this.lowarray.push(Number(this.countries[index].Low));
    
  }
  this.Data = this.lowarray;
  this.last= this.Data[this.Data.length-1];
  this.adj= this.last["Adj Close"];

    const n = this.Data.length;
    for(let i = 0; i < n; i++) { 
      let a = Number(this.Data[i].Low);
      if(!isNaN(a)) {
        this.low.push(a);
      }
}

    this.lst = this.low.slice(-52);
    this.max = Math.max.apply(null, this.lst);
    this.min = Math.min.apply(null, this.lst);

  });
}}

