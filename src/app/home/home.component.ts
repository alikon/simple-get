import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showSpinner = true;
  articles;
  meta;
  links;
  pageLimit;
  pageOffset;
/*
  profileForm = new FormGroup({
    name: new FormControl(''),
  });
*/

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params.offset);
      console.log(params.limit);
      if (params.offset != undefined && params.limit != undefined) {
        this.getArticlesX(params.offset, params.limit);
      }
      else {
        this.getArticles();
      }

    });


  }


  getArticlesX(offset, limit) {
    this.articleService.getArticlesX(offset, limit)
      .subscribe((res: any) => {
        const newRes = res.data;
        this.articles = newRes;
        const metaD = res.meta;
        this.meta = metaD;
        const links = res.links;
        this.links = links

        //links.next = 'page[offset]=10&page[limit]=5';
        //links.last = 'page[offset]=20&page[limit]=20';
        this.showSpinner = false;
        console.log(this.meta)
      });

  }
  getArticles() {
    this.articleService.getArticles()
      .subscribe((res: any) => {
        const newRes = res.data;
        this.articles = newRes;
        const metaD = res.meta;
        this.meta = metaD;
        const links = res.links;
        this.links = links
        //links.next = 'page[offset]=10&page[limit]=5';
        //links.last = 'page[offset]=20&page[limit]=20';
        this.showSpinner = false;
        console.log(metaD)
      });
  }
}
