import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'api/users';
  contactUrl = 'api/contacts';
  constructor(private httpClient:HttpClient) { }

  // Get all Objects from DB
  getAllUsers() {
    return this.httpClient.get(this.userUrl);
  }

  getAllContacts() {
    return this.httpClient.get(this.contactUrl);
  }

  // Get Object By ID
  getUserById(id:string) {
    return this.httpClient.get(`${this.userUrl}/${id}`);
  }

  // Delete Object By ID
  deleteUser(id:string) {
    return this.httpClient.delete(`${this.userUrl}/${id}`);
  }

  addUser(user:any) {
    return this.httpClient.post(`${this.userUrl}`,user);
  }

  addContact(contact:any) {
    return this.httpClient.post(`${this.contactUrl}`, contact );
  }
}
