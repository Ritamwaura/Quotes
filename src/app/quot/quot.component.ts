import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';
@Component({
  selector: 'app-quot',
  templateUrl: './quot.component.html',
  styleUrls: ['./quot.component.css']
})
export class QuotComponent implements OnInit {
  title = 'quotes to trust';

  quotes: Quote[]=[
    new Quote(1,'Albert Einstein','I have no special talent. I am only passionately curious.','iiiiiiiiiii'),
    new Quote(2,'kkkkkkkk','llllllllll','mmmmmmmmmmm')
  ];

  toggleDesription(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }


  constructor() { }

  ngOnInit() {
  }

}
