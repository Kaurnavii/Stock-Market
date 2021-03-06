import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Admin/admin.service';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/Company';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  companyname:String;
  id: number;
  ceo:String;
  turnover:String;
  description:String;
  ipodate:String;

  constructor(private adminService: AdminService,private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    let company = new Company(this.companyname,this.ceo,this.turnover, this.description,this.ipodate);
    this.adminService.updateCompany(company)
    .subscribe(data => console.log(data), error => console.log(error));

    this.router.navigate(['ManageCompany']);
  }

}
