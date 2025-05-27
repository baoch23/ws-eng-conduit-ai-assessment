import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@realworld/core/api-types';
import { API_URL } from '@realworld/core/http-client';

@Injectable({ providedIn: 'root' })
export class RosterService {
  constructor(private http: HttpClient) {}

  getRoster(userId?: number): Observable<User[]> {
    const params = userId ? new HttpParams().set('userId', userId.toString()) : new HttpParams();
    return this.http.get<User[]>(`${API_URL}/roster`, { params });
  }
}
