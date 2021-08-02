import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  matches: any;
  users: any;
  contacts: any;
  constructor(
    private matchService: MatchService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matches = data;
      }
    );
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data;
      }
    );

    this.userService.getAllContacts().subscribe(
      data => {
        this.contacts = data;
      }
    );
  }

  updateMatches(newMatches: any) {
    this.matches = newMatches;
  }

  updateUsers(newUsers: any) {
    this.users = newUsers;
  }

  editContact(id: number) {
    this.router.navigate([`edit-contact/${id}`]);
  }
  removeMatchFromList(matchId: any) {
    console.log(this.matches,matchId);
    this.matches= this.matches.filter(matches => {
      return matches.id != matchId;
    })
  }



}
