import { Component, OnInit } from '@angular/core';

import { JoomlaService } from '../services/joomla.service';

@Component({
  selector: 'app-joomla',
  templateUrl: './joomla.component.html',
  styleUrls: ['./joomla.component.scss']
})
export class JoomlaComponent implements OnInit {

  showSpinner = true;
  users;

  constructor(
    private userService: JoomlaService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
    .subscribe((res: any) => {
      const newRes = res.data.concat(res.data);
      this.users = newRes;
      this.showSpinner = false;
    });
  }

}
