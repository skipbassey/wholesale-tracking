import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { LeadService } from 'src/services/lead.service';
import { LeadDataSource } from './lead.datasource';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, AfterViewInit {

  dataSource: LeadDataSource;
  displayedColumns: string[] = ['Owner First Name', 'Owner Last Name', 'Address', 'City', 'State', 'Zip Code'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private leadService: LeadService
  ) { }

  ngOnInit() {

    this.dataSource = new LeadDataSource(this.leadService);

    this.dataSource.loadLeads();   
  }

  ngAfterViewInit() {

  }

  loadLeadsPage(): void {
    
  }

}
