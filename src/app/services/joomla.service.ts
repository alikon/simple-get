import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JoomlaService {
   token ='c2hhMjU2OjQxOjViOGJiODlkM2QxODdiMzc2ZTlmYjlhZDI1YzBlZjQzODg1NGJkOGRiZWE2OTJmZTY4OTE2Y2UzZjBjY2UxNjA='
   httpOptions = {
    headers: new HttpHeaders({ 
      'X-Joomla-Token': this.token,
      'Content-Type': 'application/json',
    })
  };
  constructor(
    @Inject('joomlaUrl') private joomlaUrl,
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.joomlaUrl}`, this.httpOptions);
  }

  getUser(id) {
    return this.http.get(`${this.joomlaUrl}/${id}`, this.httpOptions);
  }

}
