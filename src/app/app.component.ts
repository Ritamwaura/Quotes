import { Component } from '@angular/core';
import { Quotes } from './quotes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes to trust';
quote: Quotes[] =[
{id:1, name:'Watch finding Nemo',author:'Rita',description:'love is powerfull'},
];
}
