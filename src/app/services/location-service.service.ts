import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://git-repo-zc-api4.onrender.com/locations';
@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  constructor(private http: HttpClient) { }
  public get(): Observable<any> {
    return this.http.get(API_URL).pipe(map(res => res));
  }
}
