


import { Component, OnInit } from '@angular/core';
import { UserapimessageService } from './../../service/userapimessage.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-listmessagebyuser',
  templateUrl: './listmessagebyuser.component.html',
  styleUrls: ['./listmessagebyuser.component.css']
})
export class ListmessagebyuserComponent {
  
  message:any = [];
  constructor(private apiService: UserapimessageService) { 
    this.readmessage();
  }
  ngOnInit() {}
  readmessage(){
    this.apiService.getmessages().subscribe((data) => {
     this.message = data;
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
  removemessage(message, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletemessage(message._id).subscribe((data) => {
          this.message.splice(index, 1);
        }
      )    
    }
  }
}