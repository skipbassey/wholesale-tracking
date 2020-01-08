import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Lead } from 'src/models/lead';


@Injectable()
export class LeadService {

    constructor(private http: HttpClient) {}

    getAllLeads(): Observable<any> {
        const url = 'https://jxz1ghkbcl.execute-api.us-east-1.amazonaws.com/default/getLeads';

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };        
          
        return this.http.get(url, httpOptions);
    }

    addLead(lead: Lead): Observable<any> {
      const url = "https://owhtm327f6.execute-api.us-east-1.amazonaws.com/default/addLead";

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };  

      return this.http.post(url, lead,httpOptions)
    }
}