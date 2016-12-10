import { RegisterComponent } from '../Register/register.component';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  title = 'Login';
  loginForm : FormGroup;
  constructor(private formBuilder:FormBuilder){}
  
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      login: ['',Validators.required],
      password: ['',Validators.required]
    });  
  }
  login(model:User,isValid:boolean)
  {
    if(isValid)
    {
      console.log(model);
    }
  }

}
