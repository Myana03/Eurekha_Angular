import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-module-assignment',
  imports: [],
  templateUrl: './http-module-assignment.html',
  styleUrl: './http-module-assignment.css',
})
export class HttpModuleAssignment {
  stocksArr:any=[];
  stockUrl='http://endeavourtech.ddns.net:8095/stockanalytics/stocks/getAllStockFundamentalsJPA'
  constructor(private httpClient:HttpClient){}

  ngOnInit(){
    this.stocksArr=this.httpClient.get(this.stockUrl).subscribe((res)=>{
      this.stocksArr=res;
    })
  }
}
