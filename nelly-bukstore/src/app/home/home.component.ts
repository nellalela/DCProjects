import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  dataset: any = [];

  constructor() { }

  ngOnInit() {
    d3.csv('./assets/books.csv', (data) => {
      this.dataset = data;
      console.log(data);
    });
  }

  ratingSort(){
      this.dataset.sort((a,b) => d3.descending(a.average_rating, b.average_rating));
    }

    tSort(){
    this.dataset.sort((a,b) => d3.descending(a.title, b.title));
  }

  rSort(){
    this.dataset.sort((a,b) => d3.ascending(a.average_rating, b.average_rating));
  }


}
