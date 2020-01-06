import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LeadService {

    constructor(private http: HttpClient) {}

    getAllLeads(): Observable<any> {
        const url = 'https://mlxruy55n6.execute-api.us-east-1.amazonaws.com/default/getLead';

        return this.http.get(url);

    }
}