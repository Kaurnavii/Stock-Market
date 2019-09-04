import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Admin/admin.service';
import { Router } from '@angular/router';
import {IPO} from 'src/app/model/IPO';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIPOComponent implements OnInit {
  companycode:String;
  stockexchange:String;
  pricepershare:String;
  totalshares:String;
  openingdate:String;
  remarks:String;
  constructor(private adminService: AdminService,private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    let ipo = new IPO(this.companycode,this.stockexchange,this.pricepershare, this.totalshares,this.openingdate,this.remarks);
    this.adminService.createIPO(ipo)
    .subscribe(data => console.log(data), error => console.log(error));

    this.router.navigate(['AdminLanding']);
  }

}