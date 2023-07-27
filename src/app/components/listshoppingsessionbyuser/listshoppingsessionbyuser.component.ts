

import { Component, OnInit } from '@angular/core';
import { AdminapishoppingsessionService } from './../../service/adminapishoppingsession.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-listshoppingsessionbyuser',
  templateUrl: './listshoppingsessionbyuser.component.html',
  styleUrls: ['./listshoppingsessionbyuser.component.css']
})
export class ListshoppingsessionbyuserComponent {
  
  shoppingsession:any = [];
  constructor(private apiService: AdminapishoppingsessionService) { 
    this.readshoppingsession();
  }
  ngOnInit() {}
  readshoppingsession(){
    this.apiService.getshoppingsessions().subscribe((data) => {
     this.shoppingsession = data;
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
  removeshoppingsession(shoppingsession, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteshoppingsession(shoppingsession._id).subscribe((data) => {
          this.shoppingsession.splice(index, 1);
        }
      )    
    }
  }
}