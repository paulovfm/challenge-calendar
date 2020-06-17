import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professional } from 'src/app/shared/models/professional';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor(
    private http: HttpClient
  ) { }

  getProfessionals(): Observable<Professional[]> {
    return this.http.get<Professional[]>(`${environment.endPoint}/professionals?_embed=review`)
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  handleError(error: any): Observable<any> {
    return throwError(error);
  }

}
