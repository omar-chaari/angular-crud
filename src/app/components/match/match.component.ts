import { MatchService } from './../../services/match.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input() match: any;
  @Output() newMatches: EventEmitter<any> = new EventEmitter();
  @Output() matchRemovedId: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private router: Router,
    private matchService: MatchService) { }

  ngOnInit() {
  }

  displayMatch(id: string) {
    this.router.navigate([`display-match/${id}`]);
  }

  deleteMatch(id: string) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        this.matchRemovedId.emit(id);
        console.log(`match N° ${id} deleted`);
        
        //this.matchService.getAllMatches().subscribe(
         // data => {
           // this.newMatches.emit(data);
          //}
        //)
      }
    )
  }

}
