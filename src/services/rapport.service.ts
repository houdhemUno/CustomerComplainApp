import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rapport } from '../models/rapport.model';

const baseUrl = 'https://mocki.io/v1/752db44f-b2b5-4f06-bc64-096957b7d942'; // Replace with your API URL

@Injectable({
  providedIn: 'root',
})
export class RapportService {
  constructor(private http: HttpClient) {}

  getAllRapports(): Observable<Rapport[]> {
    return this.http.get<Rapport[]>(baseUrl);
  }
}
