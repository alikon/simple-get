import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-juser-detail',
  templateUrl: './juser-detail.component.html',
  styleUrls: ['./juser-detail.component.scss']
})
export class JuserDetailComponent implements OnInit {

  showSpinner = true;
  userId;
  user;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private location: Location
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
     // let a  = JSON.parse( this.user.attributes.mediafielduser)
      //this.user.attributes.mediafielduser = 'http://dev4.loc/'+ a.imagefile.split('#', 1)
      console.log(this.user.attributes);
    }, (err: any) => {
      console.log(err);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
