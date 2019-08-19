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
    new Quote(1,'Albert Einstein','I have no special talent. I am only passionately curious.',new Date(2018,7,13)),
    new Quote(2,'Rita Brittney','Love is powerful',new Date(2018,7,13))
  ];

  toggleDescription(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.dateCreated = new Date(quote.dateCreated)
    this.quotes.push(quote)
  }


  constructor() { }

  ngOnInit() {
  }

}
