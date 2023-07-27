

import { Component, OnInit } from '@angular/core';
import { AdminapiadminService } from './../../service/adminapiadmin.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-listadminbyadmin',
  templateUrl: './listadminbyadmin.component.html',
  styleUrls: ['./listadminbyadmin.component.css']
})
export class ListadminbyadminComponent {
  
  admin:any = [];
  constructor(private apiService: AdminapiadminService) { 
    this.readadmin();
  }
  ngOnInit() {}
  readadmin(){
    this.apiService.getadmins().subscribe((data) => {
     this.admin = data;
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
  removeadmin(admin, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteadmin(admin._id).subscribe((data) => {
          this.admin.splice(index, 1);
        }
      )    
    }
  }
}