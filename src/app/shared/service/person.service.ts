import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Person } from '../interface/person';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personsUrl = 'api/persons';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  // 取得角色清單
  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl)
    .pipe(
      catchError(this.handleError('getPersons', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}