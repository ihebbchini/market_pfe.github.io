


import { Component, OnInit } from '@angular/core';
import { AdminapipaymentdetailService } from './../../service/adminapipaymentdetail.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-listpaymentdetailbyadmin',
  templateUrl: './listpaymentdetailbyadmin.component.html',
  styleUrls: ['./listpaymentdetailbyadmin.component.css']
})
export class ListpaymentdetailbyadminComponent {
  
  paymentdetail:any = [];
  constructor(private apiService: AdminapipaymentdetailService) { 
    this.readpaymentdetail();
  }
  ngOnInit() {}
  readpaymentdetail(){
    this.apiService.getpaymentdetails().subscribe((data) => {
     this.paymentdetail = data;
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
  removepaymentdetail(paymentdetail, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletepaymentdetail(paymentdetail._id).subscribe((data) => {
          this.paymentdetail.splice(index, 1);
        }
      )    
    }
  }
}