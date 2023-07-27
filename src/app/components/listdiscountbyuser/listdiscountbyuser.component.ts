



import { Component, OnInit } from '@angular/core';
import { AdminapidiscountService } from './../../service/adminapidiscount.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-listdiscountbyuser',
  templateUrl: './listdiscountbyuser.component.html',
  styleUrls: ['./listdiscountbyuser.component.css']
})
export class ListdiscountbyuserComponent {
  
  discount:any = [];
  constructor(private apiService: AdminapidiscountService) { 
    this.readdiscount();
  }
  ngOnInit() {}
  readdiscount(){
    this.apiService.getdiscounts().subscribe((data) => {
     this.discount = data;
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
  removediscount(discount, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletediscount(discount._id).subscribe((data) => {
          this.discount.splice(index, 1);
        }
      )    
    }
  }
}