import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  loginForm: FormGroup;
  users: any;
  constructor(
    private fb: FormBuilder,
    private router:Router
    ) {
    this.loginForm = this.fb.group({
      email: [''],
      pwd: ['']
    })
  }

  ngOnInit() {
    this.users = [
      { id: 1, email: 'a@a.a', pwd: '12345' },
      { id: 2, email: 'b@b.b', pwd: '12345' },
      { id: 3, email: 'c@c.c', pwd: '12345' },
      { id: 4, email: 'd@d.d', pwd: '12345' },
    ]
  }

  login() {
    // let findedUser = [];
    // this.users.filter(
    //   u => {
    //     if ((u.pwd === this.user.pwd) && (u.email === this.user.email)) {
    //       findedUser.push(u);
    //     }
    //   }
    // )
    let findedUser;
    for (let i = 0; i < this.users.length; i++) {
      if ((this.users[i].pwd === this.user.pwd) && 
      ((this.users[i].email === this.user.email))) {
        findedUser = this.users[i];
      }
    }
    if (findedUser) {
      this.router.navigate(['/']);
    } else {
      alert('Error');
    }
  }

}
