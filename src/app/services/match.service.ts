import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchUrl = 'api/matches'
  constructor(private httpClient:HttpClient) { }

  // Get all Objects from DB
  getAllMatches() {
    return this.httpClient.get(this.matchUrl);
  }

  // Get Object By ID
  getMatchById(id:string) {
    return this.httpClient.get(`${this.matchUrl}/${id}`);
  }

  // Delete Object By ID
  deleteMatch(id:string) {
    return this.httpClient.delete(`${this.matchUrl}/${id}`);
  }
}
