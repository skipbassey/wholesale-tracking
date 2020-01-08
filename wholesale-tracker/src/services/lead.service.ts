import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class LeadService {

    constructor(private http: HttpClient) {}

    getAllLeads(): Observable<any> {
        const url = 'https://jxz1ghkbcl.execute-api.us-east-1.amazonaws.com/default/getLeads';

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };        return this.http.get(url, httpOptions);

    }
}