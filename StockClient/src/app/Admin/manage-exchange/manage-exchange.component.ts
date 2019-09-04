import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Admin/admin.service';
import { Stock } from 'src/app/model/Stock';

@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.css']
})
export class ManageExchangeComponent implements OnInit {

  stocks: Stock[];
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.getStocks().subscribe(response => this.stocks = response);
  }

}