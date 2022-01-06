import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';

export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(this.url).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  create(resource: any) {
    // simulate throwing an error
    //return throwError(() => new AppError());
    return this.http.post(this.url + '/', resource).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  update(resource: any, data: any) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify(data))
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }

  delete(id: number) {
    //return throwError(() => new AppError());
    return this.http.delete(this.url + '/' + id).pipe(
      map((response) => response),
      catchError(this.handleError),
      retry(3)
    );
  }

  private handleError(error: Response) {
    if (error.status === 400) return throwError(() => new BadInput(error));
    if (error.status === 404) return throwError(() => new NotFoundError(error));
    return throwError(() => new AppError(error));
  }
}
