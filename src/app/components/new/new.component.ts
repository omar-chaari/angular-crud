import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  @Input() newInput:any;
  constructor() { }

  ngOnInit() {
  }

}
