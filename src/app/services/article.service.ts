import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Article } from '../article';
import { catchError, finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  token = 'c2hhMjU2OjQxOjViOGJiODlkM2QxODdiMzc2ZTlmYjlhZDI1YzBlZjQzODg1NGJkOGRiZWE2OTJmZTY4OTE2Y2UzZjBjY2UxNjA='
  httpOptions = {
    headers: new HttpHeaders({
      'X-Joomla-Token': this.token,
      'Content-Type': 'application/json',
    })
  };
  constructor(
    @Inject('articlesUrl') private joomlaUrl,
    private http: HttpClient
  ) { }

  getArticles(): Observable<any> {
    return this.http.get(`${this.joomlaUrl}`, this.httpOptions);
  }

   /* GET heroes whose name contains search term */
   searchArticlesX(term: string): Observable<any[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Article[]>(`${this.joomlaUrl}?filter[search]=${term}`, this.httpOptions).pipe(
      tap(x => x.length ?
         console.log(`found heroes matching "${term}"`) :
         console.log(`no heroes matching "${term}"`)
      ),
         
         
      catchError(this.handleError<Article[]>('searchHeroes', [])),
  
    );
 
  }

  getArticle(id): Observable<any> {
    return this.http.get(`${this.joomlaUrl}/${id}`, this.httpOptions);
  }

  searchArticles(term): Observable<any> {
    return this.http.get(`${this.joomlaUrl}?filter[search]=${term}`, this.httpOptions);
  }


  getArticlesX(offset, limit): Observable<any> {
    return this.http.get(`${this.joomlaUrl}?page[offset]=${offset}&page[limit]=${limit}`, this.httpOptions);
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
