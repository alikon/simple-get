import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token ='c2hhMjU2OjQxOjViOGJiODlkM2QxODdiMzc2ZTlmYjlhZDI1YzBlZjQzODg1NGJkOGRiZWE2OTJmZTY4OTE2Y2UzZjBjY2UxNjA='
  httpOptions = {
   headers: new HttpHeaders({ 
     'X-Joomla-Token': this.token,
     'Content-Type': 'application/json',
   })
 };
  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}`, this.httpOptions);
  }

  getUser(id) {
    return this.http.get(`${this.apiUrl}/${id}`, this.httpOptions);
  }

}