import { Component, EventEmitter, Input, OnInit} from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent extends OnInit{
    @Input() DetailsItem;

    ngOnInit()
    {
    }

    ngAfterViewInit()
    {
      console.log(this.DetailsItem);
    }
}