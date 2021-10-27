import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  showSpinner = true;
  userId;
  user;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.userId) {
      this.getDetail();
    }
  }

  getDetail() {
    this.userService.getUser(this.userId)
    .subscribe((res: any) => {
      this.user = res.data;
      this.showSpinner = false;
      console.log(this.user);
    
    });
  }

}