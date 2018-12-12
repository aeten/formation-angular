import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SettingsService } from 'src/app/core/services/settings.service';
import { User } from '../models/user';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private settingsService: SettingsService,
  ) { }

  getUser(id: number): Observable<User> {
    // return of(USERS.find(user => user.id === id));
    return this.http
      .get(`${this.settingsService.config.apiUrl}/api/User/${id}`)
      .pipe(
        map((resp) => resp as User),
        catchError(this.handleError)
      );
  }

  getUsers(): Observable<User[]> {
    // return of(USERS);
    return this.http
      .get(`${this.settingsService.config.apiUrl}/api/User`)
      .pipe(
        map((resp) => resp as User[]),
        catchError(this.handleError)
      );
  }

  createUser(user: User): Observable<any> {
    return this.http
      .post(`${this.settingsService.config.apiUrl}/api/User`, user)
      .pipe(catchError(this.handleError))
  }

  updateUser(user: User): Observable<any> {
    return this.http
      .put(`${this.settingsService.config.apiUrl}/api/User/${user.id}`, user)
      .pipe(catchError(this.handleError))
  }

  deleteUser(id: number): Observable<any> {
    return this.http
      .delete(`${this.settingsService.config.apiUrl}/api/User/${id}`)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    let msg = error.error.message;
    // return an observable with a user-facing error message
    console.error(msg);
    return throwError(msg);
  }
}