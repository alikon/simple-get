import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../models/user';
import { LocalStorageService } from '../services/local-storage.service';
@Component({
  selector: 'local-component',
  templateUrl: './local-component.component.html',
  styleUrls: ['./local-component.component.scss']
})
export class LocalComponentComponent {
  title = 'local-storage-app';
  constructor(private localStorageService: LocalStorageService) { }

  loading = false;
  users: User[];

  public firstname: string = '';
  public lastname: string = '';
  public age: number = null;
  public queryKey: string;
  public removeKey: string;
  public queryResult: string;
  public person = { firstName: this.firstname, lastName: this.lastname, age: this.age }
  userResult: any;

  public addPerson() {
    this.person.firstName = this.firstname
    this.person.age = this.age;
    this.person.lastName = this.lastname;
    this.localStorageService.setItem(this.firstname, JSON.stringify(this.person))
  }
  public getPerson(nameToRemove: string) {
    this.queryResult = this.localStorageService.getItem(nameToRemove);
  }
  public deletePerson(nameToDelete: string) {
    this.localStorageService.removeItem(nameToDelete);
  }
  public reset() {
    this.localStorageService.clear();
  }
  public getAll() {
    this.userResult = this.localStorageService.getAll();
  }

  
  ngOnInit() {
    this.loading = true;
    this.localStorageService.getAll().pipe(first()).subscribe(users => {
      console.log('LOCAL',users);
        this.loading = false;
        this.users = users;
    });
}
}
