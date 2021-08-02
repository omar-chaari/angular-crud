import { MatchService } from './../../services/match.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit, OnDestroy {

  id:string;
  match:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService:MatchService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe(
      data => {
        this.match = data;
      }
    )
  }

  displayResult(a:number,b:number) {

    if (a>b) {
      return 'Win';
    } else if (a<b) {
      return 'Lost';
    } else {
      return 'Equal';
    }

  }

  ngOnDestroy() {
    // this.match = null;
  }

}
