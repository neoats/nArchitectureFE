import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  apiUrl: string = 'https://localhost:44340/api/';
  constructor(private httpClient: HttpClient) { }

  getCom() {
    this.httpClient.get(this.apiUrl+"test")
  }
}
