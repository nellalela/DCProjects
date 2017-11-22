import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import * as  d3 from 'd3';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.styl']
})
export class DetailsComponent implements OnInit {
dataset: any = [];
id: any;
data: any;
ratings = [];


  constructor(private route: ActivatedRoute

  ) { }

  ngOnInit() {
    d3.csv('./assets/books.csv', (error,data) => {
      this.data = data.filter((the) => {
        this.route.params.subscribe(params => { this.id = params['id']});
        return the.id == this.id})[0];

var years = d3.nest()
  .key(function(d){ return d.original_publication_year})
  .rollup(function(values) { return d3.sum(values, function(d) {return +d.unit; }) })
  .map(data);


    });




  }

}
