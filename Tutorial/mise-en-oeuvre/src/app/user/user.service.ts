import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { NotificationsService } from 'angular2-notifications';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from './user';

export const USERS: User[] = [
  {
    id: 1,
    username: 'test',
    password: 'pa$$word',
    email: 'mehdi.mecheri@viveris.fr',
    firstname: 'Mehdi',
    lastname: 'Mecheri',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 2,
    username: 'test',
    password: 'pa$$word',
    email: 'lionel.messi@barca.es',
    firstname: 'Lionel',
    lastname: 'Messi',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 3,
    username: 'test',
    password: 'pa$$word',
    email: 'cristiano.ronaldo@real.es',
    firstname: 'Cristiano',
    lastname: 'Ronaldo',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 4,
    username: 'test',
    password: 'pa$$word',
    email: 'neymar.jr@psg.fr',
    firstname: 'Neymar',
    lastname: 'JR',
    birthdate: new Date(2018, 5, 22)
  }
];

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private notifService: NotificationsService
  ) { }

  getUser(id: number): Observable<User> {
    // return of(USERS.find(user => user.id === id));
    return this.http
      .get(`https://aspnetcoreapistarter.azurewebsites.net/api/User/${id}`)
      .pipe(
        map((resp) => resp as User),
        catchError(this.handleError)
      );
  }

  getUsers(): Observable<User[]> {
    // return of(USERS);
    return this.http
      .get(`https://aspnetcoreapistarter.azurewebsites.net/api/User`)
      .pipe(
        map((resp) => resp as User[]),
        catchError(this.handleError)
      );
  }

  createUser(user: User): Observable<any> {
    return this.http
      .post(`https://aspnetcoreapistarter.azurewebsites.net/api/User`, user)
      .pipe(catchError(this.handleError))
  }

  updateUser(user: User): Observable<any> {
    return this.http
      .put(`https://aspnetcoreapistarter.azurewebsites.net/api/User/${user.id}`, user)
      .pipe(catchError(this.handleError))
  }

  deleteUser(id: number): Observable<any> {
    return this.http
      .delete(`https://aspnetcoreapistarter.azurewebsites.net/api/User/${id}`)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    let msg = error.error.message;
    // return an observable with a user-facing error message
    console.error(msg);
    return throwError(msg);
  }
}