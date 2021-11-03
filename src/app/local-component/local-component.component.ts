import { Component } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
@Component({
  selector: 'local-component',
  templateUrl: './local-component.component.html',
  styleUrls: ['./local-component.component.scss']
})
export class LocalComponentComponent {
  title = 'local-storage-app';
  constructor( private localStorageService: LocalStorageService) {}
  public firstname: string = '';
  public lastname: string = '';
  public age: number = null;
  public queryKey: string;
  public removeKey: string;
  public queryResult: string;
  public person = {firstName: this.firstname, lastName: this.lastname, age: this.age }

public addPerson(){
  this.person.firstName = this.firstname
  this.person.age = this.age;
  this.person.lastName = this.lastname;
  this.localStorageService.setItem(this.firstname,  JSON.stringify(this.person))
}
 public getPerson(nameToRemove:string){
  this.queryResult = this.localStorageService.getItem(nameToRemove);
}
public deletePerson(nameToDelete:string){
   this.localStorageService.removeItem(nameToDelete);
}
public reset(){
   this.localStorageService.clear();
}
}
