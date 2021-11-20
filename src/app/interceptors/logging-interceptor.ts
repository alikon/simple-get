import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';

import { catchError, finalize, tap } from 'rxjs/operators';
import { MessageService } from '../services/message.service';
import { throwError } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private messenger: MessageService,
    private accountService: AccountService,
    ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;

    // extend server response observable with logging
    return next.handle(req)
      .pipe(
        catchError(err => {
          if ([401, 403].includes(err.status)) {
              // auto logout if 401 or 403 response returned from api
              this.accountService.logout();
              console.error(err.status);
          }
         
          const error = err.error?.message || err.statusText;
          console.error(err);
          this.messenger.add(err.status + ':' + err.error?.message);
          return throwError(error);
      }),
        tap(
          // Succeeds when there is a response; ignore other events
          event => ok = event instanceof HttpResponse ? 'succeeded' : '',
          // Operation failed; error is an HttpErrorResponse
          error => ok = 'failed ' + error.error?.message + ' ' + status

        ),
        // Log when response observable either completes or errors
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms. ${req.params}`;

          this.messenger.add(msg);
          //window.alert(ok);
          //console.log(event)
        }),

      );
  }

}