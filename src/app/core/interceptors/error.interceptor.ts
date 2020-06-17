import { HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorIntercept implements HttpInterceptor {

  constructor() {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage: string | HttpErrorResponse;
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            if (error instanceof HttpErrorResponse) {
              if (error.status === 401) {
                // redirect to the login route
              }
            }
            errorMessage = error;
          }
          // console.log(errorMessage);
          return throwError(errorMessage);
        })
      );
  }
}
