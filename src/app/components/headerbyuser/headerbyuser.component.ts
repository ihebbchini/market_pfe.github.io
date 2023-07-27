



import { Component, OnInit } from '@angular/core';
import { AdminapiproductService } from './../../service/adminapiproduct.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { AdminapicategorieproductService } from './../../service/adminapicategorieproduct.service';
import { AdminapidiscountService } from './../../service/adminapidiscount.service';
import { AdminapiuserService } from './../../service/adminapiuser.service';

@Component({
  selector: 'app-headerbyuser',
  templateUrl: './headerbyuser.component.html',
  styleUrls: ['./headerbyuser.component.css']
})
export class HeaderbyuserComponent {
  categorieproduct:any = [];
  product:any = [];
  discount:any = [];
  user:any = [];
  constructor(private apiService: AdminapiproductService,private apiService2: AdminapicategorieproductService
    ,private apiService3: AdminapidiscountService,private apiService4: AdminapiuserService) { 
    this.readproduct();
    this.readcategorieproduct();
    this.readdiscount();
    this.readuser();
  }


  readuser(){
    this.apiService4.getusers().subscribe((data) => {
     this.user = data;
    })    
  }
  readdiscount(){
    this.apiService3.getdiscounts().subscribe((data) => {
     this.discount = data;
    })    
  }




  readcategorieproduct(){
    this.apiService2.getcategorieproducts().subscribe((data) => {
     this.categorieproduct = data;
    })    
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