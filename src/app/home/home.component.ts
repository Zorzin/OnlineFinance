import { ReceiptComponent } from '../receipt/receipt.component';
import { DetailsComponent} from '../receipt/details.component';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{


  ListOfReceipts = [{
    Shop:"Tesco",
    Name:"Paragon 1",
    Products :[{
      name: "mleko",
      amount: 2,
      price: 2.43
    },
    {
      name: "kawa",
      amount: 1,
      price: 10.34
    }],
    All: 34.4
  },
  {
    Shop:"PKS",
    Name:"Paragon 2",
    Products :[{
      name: "bilet",
      amount: 1,
      price: 8.50
    }],
    All: 8.50
  }];


  detailitem ={};
  hiddendetail = true;
  hiddenlist = false;
  onDetail(ReceiptItem)
  {
     this.detailitem = ReceiptItem;
     this.hiddendetail=false;
     this.hiddenlist = true;
  }
}
