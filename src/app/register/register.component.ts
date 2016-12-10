import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  title = 'register';
  private users: User[];
  registerForm: FormGroup;
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      login:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      repassword:['',Validators.required]
    });
  }
  add(model:User,isValid:boolean)
  {
    if(isValid)
    {
        this.users.push(model);
    }
    
  }
  public getUsers()
  {
    return this.users;
  }
}
