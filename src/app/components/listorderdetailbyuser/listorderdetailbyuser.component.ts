


import { Component, OnInit } from '@angular/core';
import { AdminapiorderdetailService } from './../../service/adminapiorderdetail.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-listorderdetailbyuser',
  templateUrl: './listorderdetailbyuser.component.html',
  styleUrls: ['./listorderdetailbyuser.component.css']
})
export class ListorderdetailbyuserComponent {
  
  orderdetail:any = [];
  constructor(private apiService: AdminapiorderdetailService) { 
    this.readorderdetail();
  }
  ngOnInit() {}
  readorderdetail(){
    this.apiService.getorderdetails().subscribe((data) => {
     this.orderdetail = data;
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
  removeorderdetail(orderdetail, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteorderdetail(orderdetail._id).subscribe((data) => {
          this.orderdetail.splice(index, 1);
        }
      )    
    }
  }
}