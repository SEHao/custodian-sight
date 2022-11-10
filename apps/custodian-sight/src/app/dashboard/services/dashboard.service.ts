import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  getApiMessage(): Observable<any> {
    const url = `${environment.api}`;
    return this.httpClient.get<any>(url);
  }
}
