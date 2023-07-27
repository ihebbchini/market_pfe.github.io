

import { Component, OnInit } from '@angular/core';
import { AdminapiinventoryproductService } from './../../service/adminapiinventoryproduct.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-listinventoryproductbyadmin',
  templateUrl: './listinventoryproductbyadmin.component.html',
  styleUrls: ['./listinventoryproductbyadmin.component.css']
})
export class ListinventoryproductbyadminComponent {
  
  inventoryproduct:any = [];
  constructor(private apiService: AdminapiinventoryproductService) { 
    this.readinventoryproduct();
  }
  ngOnInit() {}
  readinventoryproduct(){
    this.apiService.getinventoryproducts().subscribe((data) => {
     this.inventoryproduct = data;
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
  removeinventoryproduct(inventoryproduct, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteinventoryproduct(inventoryproduct._id).subscribe((data) => {
          this.inventoryproduct.splice(index, 1);
        }
      )    
    }
  }
}