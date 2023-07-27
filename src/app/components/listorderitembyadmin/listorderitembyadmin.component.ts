


import { Component, OnInit } from '@angular/core';
import { AdminapiorderitemService } from './../../service/adminapiorderitem.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-listorderitembyadmin',
  templateUrl: './listorderitembyadmin.component.html',
  styleUrls: ['./listorderitembyadmin.component.css']
})
export class ListorderitembyadminComponent {
  
  orderitem:any = [];
  constructor(private apiService: AdminapiorderitemService) { 
    this.readorderitem();
  }
  ngOnInit() {}
  readorderitem(){
    this.apiService.getorderitems().subscribe((data) => {
     this.orderitem = data;
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
  removeorderitem(orderitem, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteorderitem(orderitem._id).subscribe((data) => {
          this.orderitem.splice(index, 1);
        }
      )    
    }
  }
}