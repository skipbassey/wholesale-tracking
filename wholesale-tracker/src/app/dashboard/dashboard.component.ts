import { Component, OnInit } from '@angular/core';
import { LeadService } from 'src/services/lead.service';
import { LeadDataSource } from './lead.datasource';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  dataSource: LeadDataSource;
  displayedColumns: string[] = ['Owner First Name', 'Owner Last Name', 'Address', 'City', 'State', 'Zip Code'];

  constructor(
    private leadService: LeadService
  ) { }

  ngOnInit() {

    this.dataSource = new LeadDataSource(this.leadService);

    this.dataSource.loadLeads();
   
  }

}
