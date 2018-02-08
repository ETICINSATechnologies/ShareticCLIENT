import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { Chapter } from '../entities/chapter';
import { API_SERVER } from '../app.constants';
import {Formation} from '../entities/formation';

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
   * Put: Update the chapter on the server
   * @param {Chapter} chapter
   * @returns {Observable<Chapter>}
   */
  updateChapter (chapter: Chapter): Observable<Chapter> {
    return this.http.put<Chapter>(API_SERVER.chapter, chapter, httpOptions)
      .map(result => result['res'])
      .pipe(catchError(this.handleError<Chapter>('updateChapter'))
      );
  }

  /**
   * Post: add a new chapter to a formation on the server
   * @param {Chapter} chapter
   * @param {number} idFormation
   * @returns {Observable<Chapter>}
   */
  addChapter (chapter: Chapter, idFormation: number): Observable<Chapter> {
    const url = `${API_SERVER.formation}/${idFormation}/addChapter`;
    return this.http.post<Chapter>(url, chapter, httpOptions)
      .map(result => result['res'])
      .pipe(catchError(this.handleError<Chapter>('addChapter'))
      );
  }

  /**
   * Delete: delete the chapter on the server
   * @param {Chapter} chapter
   * @returns {Observable<Chapter>}
   */
  deleteChapter(chapter: Chapter): Observable<Chapter> {
    const url = `${API_SERVER.chapter}/${chapter.id}`;
    return this.http.delete<Chapter>(url)
      .pipe(catchError(this.handleError<Chapter>(`deleteChapter id=${chapter.id}`)));
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
