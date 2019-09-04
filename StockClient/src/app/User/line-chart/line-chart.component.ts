import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public lineChartLabels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  public lineChartData = [
    {data: [1200,1100,1500,1700,2000,1764,1398,1853,2000,1550,1000,1100], label: 'Company1'},
    {data: [1900,1500,2000,1450,2000,1298,1800,1300,1108,1205,1000,1300], label: 'Company2'}
  ];
  public lineChartType = 'line';
  constructor() { }
  ngOnInit() {
  }
}