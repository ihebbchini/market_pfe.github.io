


import { Component, OnInit } from '@angular/core';
import { AdminapiuserpaiementService } from './../../service/adminapiuserpaiement.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-listuserpaiementbyadmin',
  templateUrl: './listuserpaiementbyadmin.component.html',
  styleUrls: ['./listuserpaiementbyadmin.component.css']
})
export class ListuserpaiementbyadminComponent {
  
  
  userpaiement:any = [];
  constructor(private apiService: AdminapiuserpaiementService) { 
    this.readuserpaiement();
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
  ngOnInit() {}
  readuserpaiement(){
    this.apiService.getuserpaiements().subscribe((data) => {
     this.userpaiement = data;
    })    
  }
  removeuserpaiement(userpaiement, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteuserpaiement(userpaiement._id).subscribe((data) => {
          this.userpaiement.splice(index, 1);
        }
      )    
    }
  }
}