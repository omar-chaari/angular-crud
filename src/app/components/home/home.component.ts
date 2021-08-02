import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isConnected:boolean;
  constructor() { }

  ngOnInit() {
    this.isConnected = true;
  }

}
