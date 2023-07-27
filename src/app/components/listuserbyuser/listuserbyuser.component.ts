



import { Component, OnInit } from '@angular/core';
import { UserapiuserService } from './../../service/userapiuser.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-listuserbyuser',
  templateUrl: './listuserbyuser.component.html',
  styleUrls: ['./listuserbyuser.component.css']
})
export class ListuserbyuserComponent {
  
  user:any = [];
  constructor(private apiService: UserapiuserService) { 
    this.readuser();
  }
  ngOnInit() {}
  readuser(){
    this.apiService.getusers().subscribe((data) => {
     this.user = data;
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
  removeuser(user, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteuser(user._id).subscribe((data) => {
          this.user.splice(index, 1);
        }
      )    
    }
  }
}