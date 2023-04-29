import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModal } from '../components/modals/loginModal';
import { SingleResponseModal } from '../components/modals/singleResponseModal';
import { TokenModal } from '../components/modals/tokenModal';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = 'https://localhost:44340/api/auth/';

  constructor(private httpClient:HttpClient) { }

  login(loginModal: LoginModal) {
    return this.httpClient.post<SingleResponseModal<TokenModal>>(this.apiUrl+"login",loginModal)
  }
  isAuthenticated( ) {
    return localStorage.getItem("token") ? true : false;
  }

}
