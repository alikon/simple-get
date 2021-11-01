import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  showSpinner = true;
  articleId;
  article;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.articleId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.articleId) {
      this.getDetail();
    }
  }

  getDetail() {
    this.articleService.getArticle(this.articleId)
      .subscribe((res: any) => {
        this.article = res.data;
        this.showSpinner = false;
        console.log(this.article);

      });
  }
  goBack(): void {
    this.location.back();
  }
}