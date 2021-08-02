import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user:any;
  @Output() newUsers: EventEmitter<any> = new EventEmitter();
  constructor(
    private router:Router,
    private userService:UserService) { }

  ngOnInit() {
  }

  displayUser(id:string) {
    this.router.navigate([`display-user/${id}`]);
  }

  deleteUser(id:string) {
    this.userService.deleteUser(id).subscribe(
      () => {
        console.log(`user N° ${id} deleted`);   
        this.userService.getAllUsers().subscribe(
          data => {
            this.newUsers.emit(data);
          }
        ) 
      }
    )
  }

}
