import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopAdvertisementsService {

  constructor(public http: HttpClient) { }

  public getData(): Observable<Array<any>> {
    return this.http.get<any>(`/assets/mock-data/top-advertisements.json`).pipe(delay(100));
}
}
