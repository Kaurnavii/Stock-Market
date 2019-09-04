import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Admin/admin.service';
import { Router } from '@angular/router';
import { Stock } from 'src/app/model/Stock';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {
  stockname:String;
  ceo:String;
  description:String;
  ipodate:String;

  constructor(private adminService: AdminService,private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    let stock = new Stock(this.stockname,this.ceo,this.description,this.ipodate);
    this.adminService.updateStock(stock)
    .subscribe(data => console.log(data), error => console.log(error));

    this.router.navigate(['ManageExchange']);
  }

}
