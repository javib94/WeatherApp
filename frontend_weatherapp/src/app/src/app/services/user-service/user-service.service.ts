import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../../../../environments/environment";
import { User } from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  insertUser(user: User){
    return this.http.post(`${environment.apiUrl}users`, user);
  }

  getUsers(){
    return this.http.get(`${environment.apiUrl}users`)
  }
}
