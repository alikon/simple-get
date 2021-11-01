import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-joomla',
  templateUrl: './joomla.component.html',
  styleUrls: ['./joomla.component.scss']
})
export class JoomlaComponent implements OnInit {

  showSpinner = true;
  users;
  meta;
  links;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe((res: any) => {
        const newRes = res.data;
        this.users = newRes;
        const metaD = res.meta;
        this.meta = metaD;
        const links = res.links;
        this.links = links;
        this.showSpinner = false;
        console.log(this.links)
        this.showSpinner = false;
      });
  }

}
