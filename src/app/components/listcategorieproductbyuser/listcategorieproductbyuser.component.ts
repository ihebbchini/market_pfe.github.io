


import { Component, OnInit } from '@angular/core';
import { AdminapicategorieproductService } from './../../service/adminapicategorieproduct.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-listcategorieproductbyuser',
  templateUrl: './listcategorieproductbyuser.component.html',
  styleUrls: ['./listcategorieproductbyuser.component.css']
})
export class ListcategorieproductbyuserComponent {
  
  categorieproduct:any = [];
  constructor(private apiService: AdminapicategorieproductService) { 
    this.readcategorieproduct();
  }
  ngOnInit() {}
  readcategorieproduct(){
    this.apiService.getcategorieproducts().subscribe((data) => {
     this.categorieproduct = data;
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
  removecategorieproduct(categorieproduct, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletecategorieproduct(categorieproduct._id).subscribe((data) => {
          this.categorieproduct.splice(index, 1);
        }
      )    
    }
  }
}