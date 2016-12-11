import { Component, EventEmitter, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'createreceipt',
  templateUrl: './createreceipt.component.html',
  styleUrls: ['./createreceipt.component.css']
})

export class CreateReciptComponent{

  add = false;
  create = true;
  
  reciptForm: FormGroup;
  constructor(private formBuilder:FormBuilder){}
  
  ngOnInit(){
    this.reciptForm = this.formBuilder.group({
      shop: ['',Validators.required],
      name: ['',Validators.required]
    });  
  }
  
  recipt(model,isValid:boolean){
    if(isValid)
    {
      console.log(model);
    }
  }

  Create(){
    this.add=true;
    this.create = false;
  }
}