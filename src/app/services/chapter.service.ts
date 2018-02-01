import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { Chapter } from '../entities/chapter';
import { API_SERVER } from '../app.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ChapterService {

  constructor(private http: HttpClient) { }

  /**
   * Get the chapters of a formation from a server
   * @param {number} id
   * @returns {Observable<Chapter[]>}
   */
  getListChapters(id: number): Observable<Chapter[]> {
    const url = `${API_SERVER.chapters}/${id}`;
    return this.http.get<Chapter[]>(url)
      .map(result => result['res'])
      .pipe(catchError(this.handleError('getListChapters', []))
      );
  }

  /**
   * GET a chapter from the server.
   * @param {number} id
   * @returns {Observable<Chapter[]>}
   */
  getChapter(id: number): Observable<Chapter> {
    const url = `${API_SERVER.chapter}/${id}`;
    return this.http.get<Chapter>(url)
      .map(result => result['res'])
      .pipe(catchError(this.handleError<Chapter>(`getChapter id=${id}`)));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
