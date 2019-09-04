import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/Company';
import { AdminService } from 'src/app/Admin/admin.service';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {


  companies: Company[];
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.getCompanies().subscribe(response => this.companies = response);
  }

}