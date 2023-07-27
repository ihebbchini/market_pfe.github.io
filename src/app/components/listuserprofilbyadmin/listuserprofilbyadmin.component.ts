


import { Component, OnInit } from '@angular/core';
import { AdminapiuserprofilService } from './../../service/adminapiuserprofil.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-listuserprofilbyadmin',
  templateUrl: './listuserprofilbyadmin.component.html',
  styleUrls: ['./listuserprofilbyadmin.component.css']
})
export class ListuserprofilbyadminComponent {
  
  userprofil:any = [];
  constructor(private apiService: AdminapiuserprofilService) { 
    this.readuserprofil();
  }
  ngOnInit() {}
  readuserprofil(){
    this.apiService.getuserprofils().subscribe((data) => {
     this.userprofil = data;
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
  removeuserprofil(userprofil, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteuserprofil(userprofil._id).subscribe((data) => {
          this.userprofil.splice(index, 1);
        }
      )    
    }
  }
}