import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //valbutton: any;
  errorMessage: any;
  password:any;
  conpassword:any;
  email:any;
  username:any;

  constructor(private csvservice : CommonService,private router:Router) { }
  valbutton = 'Save';
  ngOnInit(): void {
  }
  onSave(user) {
    user.mode = this.valbutton;
    if(this.password === this.conpassword){
    this.csvservice.saveUser(user)
      .subscribe(data => {
        alert(data.data);
        this.router.navigate(['login']);
      }, error => this.errorMessage = error)
      
  }
  
    else{
      alert('Invalid')
    }
    
}}
