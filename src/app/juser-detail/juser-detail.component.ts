import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoomlaService } from '../services/joomla.service';

@Component({
  selector: 'app-juser-detail',
  templateUrl: './juser-detail.component.html',
  styleUrls: ['./juser-detail.component.scss']
})
export class JuserDetailComponent implements OnInit {

  showSpinner = true;
  userId;
  user;

  constructor( private userService: JoomlaService,
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
      }, (err: any) => {
        console.log(err);
      });
    }

}
