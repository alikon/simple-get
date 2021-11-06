import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private http: HttpClient) { }

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getItem(key: string): string {
    return localStorage.getItem(key)
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }
}