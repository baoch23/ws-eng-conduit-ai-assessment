import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@realworld/core/api-types';
import { Inject, InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL');

@Injectable({ providedIn: 'root' })
export class RosterService {
  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  getRoster(userId?: number): Observable<User[]> {
    const params = userId ? new HttpParams().set('userId', userId.toString()) : new HttpParams();
    console.log("API_URL: ", this.apiUrl);
    return this.http.get<User[]>(`${this.apiUrl}/roster`, { params });
  }
}
