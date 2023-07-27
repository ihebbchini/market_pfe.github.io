


import { Component, OnInit } from '@angular/core';
import { AdminapiproductService } from './../../service/adminapiproduct.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-visiteuraccordion',
  templateUrl: './visiteuraccordion.component.html',
  styleUrls: ['./visiteuraccordion.component.css']
})
export class VisiteuraccordionComponent {
  product:any = [];
  constructor(private apiService: AdminapiproductService) { 
    this.readproduct();
  }
  ngOnInit() {}
  readproduct(){
    this.apiService.getproducts().subscribe((data) => {
     this.product = data;
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
  removeproduct(product, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteproduct(product._id).subscribe((data) => {
          this.product.splice(index, 1);
        }
      )    
    }
  }
}