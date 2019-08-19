import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;

  @Output() wantToDelete = new EventEmitter<boolean>();

quoteDelete(complete:boolean){
  this.wantToDelete.emit(complete);
}

  constructor() { }

  ngOnInit() {
  }

}
