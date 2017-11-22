import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.styl']
})
export class RandomComponent implements OnInit {
dataset : any;
states: any;

  constructor() { }

  ngOnInit() {
    //intento 1
   /*this.dataset = [];
    for (var i = 0; i < 32; i++) {
      var newNumber = Math.random() * 200;
      this.dataset.push(newNumber)


  }*/


this.dataset =[{state:"", value: 0},
{state:"", value: 0}, {state:"", value: 0}, {state:"", value: 0},
{state:"", value: 0},{state:"", value: 0},{state:"", value: 0},
{state:"", value: 0},{state:"", value: 0},{state:"", value: 0},
{state:"", value: 0},{state:"", value: 0},{state:"", value: 0},
{state:"", value: 0},{state:"", value: 0},{state:"", value: 0},
{state:"", value: 0},{state:"", value: 0},{state:"", value: 0},{state:"", value: 0},
{state:"", value: 0},{state:"", value: 0},{state:"", value: 0},{state:"", value: 0},
{state:"", value: 0},{state:"", value: 0},{state:"", value: 0},{state:"", value: 0},
{state:"", value: 0},{state:"", value: 0},{state:"", value: 0},{state:"", value: 0}

];
this.states =['Aguascalientes',
'Baja California',
'Baja California Sur',
'Campeche',
'Chiapas',
'Chihuahua',
'Ciudad de México',
'Coahuila',
'Colima',
'Durango',
'Estado de México',
'Guanajuato',
'Guerrero',
'Hidalgo',
'Jalisco',
'Michoacán',
'Morelos',
'Nayarit',
'Nuevo León',
'Oaxaca',
'Puebla',
'Querétaro',
'Quintana Roo',
'San Luis Potosí',
'Sinaloa',
'Sonora',
'Tabasco',
'Tamaulipas',
'Tlaxcala',
'Veracruz',
'Yucatán',
'Zacatecas'];

for (var i=0; i< this.dataset.length; i++) {
  		this.dataset[i].state = this.states[i];
  	}

for (var i=0; i< this.dataset.length; i++) {
  		this.dataset[i].value = Math.random()*300;
  	}





  d3.select('#chart')
  .selectAll('rect')
  .data(this.dataset)
  .enter()
  .append('rect')
  .attr('x', function(d,i){
    return i * (800/32);
  })
  .attr('y', function(d){
    return 400-d.value;
  })
  .attr('width', '15')
  .attr('height', function(d){
    return d.value;
  })
  .attr('fill', function(d){
    return "rgb(0, 204, " + (d.value) + ")";
  })

  .on("mouseover", function(d) {
 			   		d3.select(this)

 			   			.attr("fill", "orange");
 			   })
 			   .on("mouseout", function(d) {
 				   d3.select(this)

 				   		.transition()
 				   		.duration(250)
 						.attr("fill", "rgb(0, 0, " + (d.value * 10) + ")");})
.append("title")
.text(function(d){
  return d.state + " " + d.value
})


  var sortOrder = false;
  function sortBars(){
    sortOrder = !sortOrder;

    d3.select('#chart')
    .selectAll('rect')
    .sort(function(a, b) {
             if (sortOrder) {
               return d3.ascending(a.state, b.state);
             } else {
               return d3.descending(a.state, b.state);
             }
           })
          .transition()
          .delay(function(d, i) {
            return i * 50;
          })
          .duration(1000)
          .attr("x", function(d, i) {
             return i* (800/32);
          });

     };
     d3.select("#sorting").on('click', function(){
       sortBars();

  });


}
}
