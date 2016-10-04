import { Component, OnInit } from '@angular/core';
import { SALMON } from './salmon';

@Component({
  selector: 'app-salmon-report',
  templateUrl: './salmon-report.component.html',
  styleUrls: ['./salmon-report.component.css']
})
export class SalmonReportComponent implements OnInit {

  salmon = SALMON;
  tableColumns = ['pacfin_code', 'season_year', 'wcgop_discard_count_est', 'wcgop_discard_pounds_est', 'report_category'];

  constructor() { }

  ngOnInit() {
  }

}
