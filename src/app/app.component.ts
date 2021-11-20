import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { MessageService } from './services/message.service';
import { User } from './models/user';
import { AccountService } from './services/account.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  user: User;
  debug = false

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }
  ngOnInit() {
    console.log('AppComponent.ngOnInit()',this.user);

  }
  logout() {
    this.accountService.logout();
  }
}