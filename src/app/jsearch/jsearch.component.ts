import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
import { ArticleService } from '../services/article.service';
import { Article } from '../article';
import { of } from "rxjs";
import { fromEvent } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

const APIKEY = "e8067b53";

const PARAMS = new HttpParams({
  fromObject: {
    action: "opensearch",
    format: "json",
    origin: "*"
  }
});


@Component({
  selector: 'app-jsearch',
  templateUrl: './jsearch.component.html',
  styleUrls: ['./jsearch.component.scss']
})
export class JsearchComponent implements OnInit {

  @ViewChild('articleSearchInput', { static: true }) articleSearchInput: ElementRef;
  apiResponse: any;
  isSearching: boolean;
  noResults: boolean;


  constructor(private articleService: ArticleService,
    private httpClient: HttpClient
  ) {
    this.isSearching = false;
    this.apiResponse = [];
    this.noResults = false;

    console.log(this.articleSearchInput);
  }

  //private searchTerms = new Subject<string>();


  ngOnInit(): void {
    console.log(this.articleSearchInput);



    fromEvent(this.articleSearchInput.nativeElement, 'keyup').pipe(

      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter(res => res.length > 2)

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current   
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {

      this.isSearching = true;
      this.noResults = true;

      this.searchGetCall(text).subscribe((res) => {
        console.log('res', res);
        this.isSearching = false;
        this.apiResponse = res;
        this.noResults = res.meta['total-pages'] == 0 ? true : false;
        console.log('META', res.meta['total-pages']);
        console.log('META', this.noResults);
      }, (err) => {
        this.isSearching = false;
        console.log('error', err);
      });

    });
  }

  searchGetCall(term: string) {
    if (term === '') {
      return of([]);
    }
    //return this.httpClient.get('http://www.omdbapi.com/?s=' + term + '&apikey=' + APIKEY, { params: PARAMS.set('search', term) });
    return this.articleService.searchArticles(term)
  }

}



