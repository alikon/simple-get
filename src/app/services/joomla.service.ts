import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JoomlaService {
   token ='Bearer c2hhMjU2OjQxOjViOGJiODlkM2QxODdiMzc2ZTlmYjlhZDI1YzBlZjQzODg1NGJkOGRiZWE2OTJmZTY4OTE2Y2UzZjBjY2UxNjA='
  constructor(
    @Inject('joomlaUrl') private joomlaUrl,
    private http: HttpClient
  ) { }

  getUsers() {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin': '*',
        'Authorization':this.token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      })
    };

    return this.http.get(`${this.joomlaUrl}`, httpOptions);
  }

  getUser(id) {
    return this.http.get(`${this.joomlaUrl}/users/${id}?delay=1`);
  }

}
