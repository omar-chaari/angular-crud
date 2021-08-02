import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:any = {};
  contactForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private userService:UserService) { 
    this.contactForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      subject: [''],
      content: ['']
    });
  }

  ngOnInit() {
  }
  saveContact(){
    console.log('This is my contact object', this.contact);
    this.userService.addContact(this.contact).subscribe(
      () => {
        console.log('Contact Added Successfully');  
      }
    )
  }

}
