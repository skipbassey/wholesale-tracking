import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from 'rxjs';
import { LeadService } from './lead.service';

export class LessonsDataSource implements DataSource<any> {

    private leadSubject = new BehaviorSubject<any[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();


    constructor(private leadService: LeadService) { }

    connect(collectionViewer: CollectionViewer): Observable<any[]> {
        return this.leadSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.leadSubject.complete();
        this.loadingSubject.complete();
    }

    loadLeads() {

        this.loadingSubject.next(true);

        this.leadService.getAllLeads()
            .subscribe(res => this.leadSubject.next(res))
    }
}