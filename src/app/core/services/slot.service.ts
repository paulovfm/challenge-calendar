import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { Slot } from 'src/app/modules/professional/models/slot';

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  constructor(
    private http: HttpClient
  ) { }

  getSlots(profissionalId: number): Observable<Slot[]> {
    return this.http.get<Slot[]>(`${environment.endPoint}/slots?profissionalId=${profissionalId}`)
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  handleError(error: any): Observable<any> {
    return throwError(error);
  }

}
