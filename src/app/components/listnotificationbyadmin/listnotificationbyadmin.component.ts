


import { Component, OnInit } from '@angular/core';
import { AdminapinotificationService } from './../../service/adminapinotification.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-listnotificationbyadmin',
  templateUrl: './listnotificationbyadmin.component.html',
  styleUrls: ['./listnotificationbyadmin.component.css']
})
export class ListnotificationbyadminComponent {
  
  notification:any = [];
  constructor(private apiService: AdminapinotificationService) { 
    this.readnotification();
  }
  ngOnInit() {}
  readnotification(){
    this.apiService.getnotifications().subscribe((data) => {
     this.notification = data;
    })    
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('report-demo.pdf');
    });
  }
  removenotification(notification, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletenotification(notification._id).subscribe((data) => {
          this.notification.splice(index, 1);
        }
      )    
    }
  }
}