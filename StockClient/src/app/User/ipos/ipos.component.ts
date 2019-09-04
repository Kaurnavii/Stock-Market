import { Component, OnInit } from '@angular/core';
import { IPO } from 'src/app/model/IPO';
import { AdminService } from 'src/app/Admin/admin.service';

@Component({
  selector: 'app-ipos',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css']
})
export class IPOsComponent implements OnInit {


  ipos: IPO[];
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.getIPOs().subscribe(response => this.ipos = response);
  }

}
