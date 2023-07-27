


import { Component, OnInit } from '@angular/core';
import { AdminapicarteitemService } from './../../service/adminapicarteitem.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-listcarteitembyuser',
  templateUrl: './listcarteitembyuser.component.html',
  styleUrls: ['./listcarteitembyuser.component.css']
})
export class ListcarteitembyuserComponent {
  
  carteitem:any = [];
  constructor(private apiService: AdminapicarteitemService) { 
    this.readcarteitem();
  }
  ngOnInit() {}
  readcarteitem(){
    this.apiService.getcarteitems().subscribe((data) => {
     this.carteitem = data;
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
  removecarteitem(carteitem, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletecarteitem(carteitem._id).subscribe((data) => {
          this.carteitem.splice(index, 1);
        }
      )    
    }
  }
}