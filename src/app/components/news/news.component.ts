import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news:any;
  specificObjects:any;
  constructor() { }

  ngOnInit() {
    this.specificObjects = [];  
    this.news = [
      {picture: 'assets/images/person_1.jpg' , time: '10/10/2020', 
      description: 'Romolu to stay at Real Nadrid?' , name: 'Romolu'},
      {picture: 'assets/images/person_2.jpg' , time: '01/09/2020', 
      description: 'Messi to stay at Real Nadrid?' , name: 'Neymar'},
      {picture: 'assets/images/person_3.jpg' , time: '14/06/2020', 
      description: 'Ronaldo to stay at Real Nadrid?' , name: 'Ronaldo'},
      {picture: 'assets/images/person_4.jpg' , time: '01/05/2020', 
      description: 'Neymar to stay at Real Nadrid?' , name: 'Neymar'}
    ]

    for (let i = 0; i < this.news.length; i++) {
      if (this.news[i].name === "Neymar") {
        this.specificObjects.push(this.news[i]);
      }
    }


  }

}
