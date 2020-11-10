import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExtractService {
  constructor(private http: HttpClient) {}

  getExtracts(): Promise<any> {
    return this.http.get(`${environment.BASE_URL}/extract`).toPromise();
  }
}
