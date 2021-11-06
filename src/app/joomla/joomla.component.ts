import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-joomla',
  templateUrl: './joomla.component.html',
  styleUrls: ['./joomla.component.scss']
})
export class JoomlaComponent implements OnInit {

  showSpinner = true;
  users: any;
  meta: any;
  links: any;
  pageLimit;
  pageOffset;
  qpNext = { offset: 10, limit: 5 };
  qpLast = { offset: 10, limit: 5 };
  qpFirst = { offset: 10, limit: 5 }
  qpPrevious = { offset: 10, limit: 5 };
  pagenum: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params.offset);
      console.log(params.limit);
      if (params.offset != undefined && params.limit != undefined) {
        this.getUsersPage(params.offset, params.limit);
      }
      else {
        this.getUsersPage(0, 1);
      }
    });
  }

  getUsersPage(offset: number, limit: number): void {
    this.userService.getUsersPage(offset, limit)
      .subscribe((res: any) => {
        const newRes = res.data;
        this.users = newRes;
        const metaD = res.meta;
        this.meta = metaD;
        const links = res.links;
        this.links = links
        this.pagenum = offset == 0 ? 1 : offset / limit + 1

        //Next
        if (links.next) {
          var url = new URL(links.next);
          let obj = {};
          var c = url.searchParams.forEach((value, key) => {
            if (key == 'page[offset]') {
              this.pageOffset = value
            }
            if (key == 'page[limit]') {
              this.pageLimit = value
            }
            obj[key] = value;
           // console.log('key ', key)
          });
         // console.log('next ', obj)
          this.qpNext.offset = this.pageOffset
          this.qpNext.limit = this.pageLimit
        }
        //Last
        if (links.last) {
          var url = new URL(links.last);
          let obj = {};
          var c = url.searchParams.forEach((value, key) => {
            if (key == 'page[offset]') {
              this.pageOffset = value
            }
            if (key == 'page[limit]') {
              this.pageLimit = value
            }
          });
         // console.log('last ', obj)
          this.qpLast.offset = this.pageOffset
          this.qpLast.limit = this.pageLimit
        }
        //First
        if (links.first) {
          var url = new URL(links.first);
          let obj = {};
          var c = url.searchParams.forEach((value, key) => {
            if (key == 'page[offset]') {
              this.pageOffset = value
            }
            if (key == 'page[limit]') {
              this.pageLimit = value
            }
          });
         // console.log('first ', obj)
          this.qpFirst.offset = this.pageOffset
          this.qpFirst.limit = this.pageLimit
        }
        // previous
        if (links.previous) {
          var url = new URL(links.previous);
          let obj = {};
          var c = url.searchParams.forEach((value, key) => {
            if (key == 'page[offset]') {
              this.pageOffset = value
            }
            if (key == 'page[limit]') {
              this.pageLimit = value
            }
          });
          //console.log('prev ', obj)
          this.qpPrevious.offset = this.pageOffset
          this.qpPrevious.limit = this.pageLimit
        }


        this.showSpinner = false;
        
      });

  }
  // getUsers() {
  //   this.userService.getUsers()
  //     .subscribe((res: any) => {
  //       const newRes = res.data;
  //       this.users = newRes;
  //       const metaD = res.meta;
  //       this.meta = metaD;
  //       const links = res.links;
  //       this.links = links;
  //       this.showSpinner = false;
  //       console.log('USER',this.users)
  //       this.showSpinner = false;
  //     });
  // }

}
