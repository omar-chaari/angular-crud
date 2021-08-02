import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  users =  [
    {  id:  1,  firstName:  'Salah', lastName: 'Salih', email: 'a@a.a', pwd: '12345' },
    {  id:  2,  firstName:  'Ali', lastName: 'Aloulou', email: 'b@b.b', pwd: '12345' },
    {  id:  3,  firstName:  'Karim', lastName: 'Krayem', email: 'c@c.c', pwd: '12345' },
    {  id:  4,  firstName:  'Omar', lastName: 'Amrouch', email: 'd@d.d', pwd: '12345' }
   ];

   let  matches =  [
    {  id:  1,  scoreOne: 2, scoreTwo: 4, teamOne: 'FCB', teamTwo: 'RMD' },
    {  id:  2,  scoreOne: 1, scoreTwo: 4, teamOne: 'Inter', teamTwo: 'JUV' },
    {  id:  3,  scoreOne: 4, scoreTwo: 4, teamOne: 'CA', teamTwo: 'EST' },
    {  id:  4,  scoreOne: 6, scoreTwo: 4, teamOne: 'ATM', teamTwo: 'Sevilla' }

   ];
   let contacts = [
    {  id:  1,  firstName: 'Contact fName', lastName: 'Contact lName', email: 'contact@email.com', 
    subject: 'Subject ...', content: 'Message...' }
   ];

   return {users, matches, contacts};

  }
}
