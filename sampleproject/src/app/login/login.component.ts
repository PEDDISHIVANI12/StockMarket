import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login_password:any;
login_email:any;
Repdata;
  constructor(private csvservice : CommonService,private router:Router) { }

  ngOnInit(): void {
    this.csvservice.GetUser().subscribe(data => {this.Repdata = data;})

  }
  login(){
    var count = 0;
    for (let index = 0; index < this.Repdata.length; index++) {
      if ((this.Repdata[index].email === this.login_email) && (this.Repdata[index].password === this.login_password) ){
          count = count + 1;
          
        }}
    if(count > 0){
      jQuery('#empModel').modal('show');
      this.router.navigate(['overview']);
        }
    else{
      alert('Invalid');
    }
  }
}
