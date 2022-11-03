import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ FilterPipe ]
})
export class TableComponent implements OnInit {
  filteredString: string = '';
  
  data:any;
  
  constructor(private common: CommonService, private route: Router, private filterPipe: FilterPipe) { }

  ngOnInit(): void{
    this.common.apiCall().subscribe((resp)=>{
      console.log(resp);
      this.data=resp;
    })
  }
  move(){
     this.route.navigateByUrl('new');
  }
  fileDownload(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Report data',
      useBom: true,
      noDownload: false,
      headers: ["Id", "Name", "Age", "Gender"]
    };
   
    new ngxCsv(this.filterPipe.transform(this.data,this.filteredString), "Report", options);
  }
 
}
