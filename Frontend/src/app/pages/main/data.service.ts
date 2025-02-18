// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResponse {
  success: string;
  result: ApiResultItem[];
}

export interface ApiResultItem {
  rate: number;
  lastprice: number;
  lastpricestr: string;
  hacim: number;
  hacimstr: string;
  min: number;
  minstr: string;
  max: number;
  maxstr: string;
  time: string;
  text: string;
  code: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:8181/api/collect/livedata';

  constructor(private http: HttpClient) {}

  getLiveData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}
