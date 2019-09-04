import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadService } from 'src/app/Admin/upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {

  userId: number;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  fileName: String;

  constructor(private router: Router, private uploadService: UploadService) { }

  ngOnInit() {
    let userId = localStorage.getItem("userId");
    this.userId = parseInt(userId);
    if (!userId) {
      alert("Logged out of your account, Please Login again")
      this.router.navigate(['sign-in']);
      return;
    }
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;
    let date = new Date();
    let dateString = `${date.getTime()}_${date.getDate()}_${date.getFullYear()}`
    this.fileName = `${dateString}.xlsx`;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.fileName).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.reload();
      }
    });
  }

  reload() {
    console.log("Reload");
    this.router.navigate(['ImportData']);
  }
}
