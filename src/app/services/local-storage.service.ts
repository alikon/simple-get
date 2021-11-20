import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})



export class LocalStorageService {

  private _myData$ = new BehaviorSubject<User[]>(null)
  public myData$ = this._myData$.asObservable()

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
    Object.keys(localStorage).forEach(data => 
      {
        let item = localStorage.getItem(data);
       // console.log(item); // item is the item from storage.
      });

      const data = JSON.parse(localStorage.getItem('user'))
      //console.log(data);
      this._myData$.next(data)
    
  }
}