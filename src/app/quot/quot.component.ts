import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quot',
  templateUrl: './quot.component.html',
  styleUrls: ['./quot.component.css']
})
export class QuotComponent implements OnInit {
  title = 'quotes to trust';
  quote: Quotes[] =[
  {id:1, name:'Watch finding Nemo',author:'Rita',description:'love is powerfull'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
