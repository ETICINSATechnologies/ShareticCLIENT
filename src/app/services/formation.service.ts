import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { Formation } from '../entities/formation';
import { API_SERVER } from '../app.constants';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FormationService {

  constructor( private http: HttpClient) { }

  /**
   * Get the formations from the server.
   * @returns {Observable<Formation[]>}
   */
  getListFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(API_SERVER.formations)
      .map(result => result['res'])
      .pipe(catchError(this.handleError('getListFormations', []))
      );
  }

  /**
   * GET formation by id. Will 404 if id not found
   * @param {number} id
   * @returns {Observable<Formation>}
   */
  getFormation(id: number): Observable<Formation> {
    const url = `${API_SERVER.formation}/${id}`;
    return this.http.get<Formation>(url)
      .map(result => result['res'])
      .pipe(catchError(this.handleError<Formation>(`getFormation id=${id}`)));
  }

  /**
   * Put: Update the formation on the server
   * @param {Formation} formation
   * @returns {Observable<Formation>}
   */
  updateFormation (formation: Formation): Observable<Formation> {
    return this.http.put<Formation>(API_SERVER.formation, formation, httpOptions)
      .map(result => result['res'])
      .pipe(catchError(this.handleError<Formation>('updateFormation'))
    );
  }

  /**
   * Post: add a new formation on the server
   * @param {Formation} formation
   * @returns {Observable<Formation>}
   */
  addFormation (formation: Formation): Observable<Formation> {
    const url = `${API_SERVER.formation}/add`;
    return this.http.post<Formation>(url, formation, httpOptions)
      .map(result => result['res'])
      .pipe(catchError(this.handleError<Formation>('addFormation'))
    );
  }

  /**
   * Delete: delete the formation from the server
   * @param {Formation | number} formation
   * @returns {Observable<Formation>}
   */
  deleteFormation (formation: Formation | number): Observable<Formation> {
    const id = typeof formation === 'number' ? formation : formation.id;
    const url = `${API_SERVER.formation}/${id}`;

    return this.http.delete<Formation>(url, httpOptions).pipe(
      catchError(this.handleError<Formation>('deleteFormation'))
    );
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
