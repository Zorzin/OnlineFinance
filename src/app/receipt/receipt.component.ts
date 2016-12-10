import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})

export class ReceiptComponent{
    @Input() ReceiptItem;
    @Output() detail = new EventEmitter();
    Details()
    {
        this.detail.emit(this.ReceiptItem);
    }
}