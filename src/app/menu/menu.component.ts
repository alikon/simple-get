import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private messenger: MessageService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/']);
  }
  ngOnInit(): void {
    const currentUser = this.authenticationService.currentUserValue;
    let msg = this.currentUser?.username ? 'Logged:' + this.currentUser.username : 'Guest';
    
    this.username= this.currentUser?.username;
    this.messenger.add(msg);
    console.log('logged', this.currentUser)
  }

}