


  

import { Router } from '@angular/router';
import { AdminapiadminService } from './../../service/adminapiadmin.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-loginbyadmin',
  templateUrl: './loginbyadmin.component.html',
  styleUrls: ['./loginbyadmin.component.css']
})
export class LoginbyadminComponent {

  submitted = false;
  adminForm: FormGroup;
  adminProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  vauesss =  "saisir vos paramétres de connexion";
  role:any;
  admin:any = [];
  adminfinded:any = [];
  adminfindedpassword:any = [];
  ii: any ;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiadminService) { 
      this.mainForm();
    this.readadmin();
  }
  mainForm() {
    this.adminForm = this.fb.group({


      login: ['', [Validators.required]],
      password: ['', [Validators.required]],


      
    });
  }
  ngOnInit() {}
  readadmin(){
    this.apiService.getadmins().subscribe((data) => {
     this.admin = data;
    })    
  }


    // Getter to access form control


    //  adminlogin
    get myForm() {
      return this.adminForm.controls;
    }
    onSubmit() {

      const hello = "email n existe pas"  
      const hellos = "connected"  
      let creatorId = []
      
      for (let i in this.admin) {
        if(this.adminForm.value.login==this.admin[i].email)
        {
  
          this.adminfinded.push(this.admin[i]);
   
        }

      }
      if(this.adminfinded.length==0)
      {
        this.router.navigateByUrl('/admin');
        this.vauesss =  "email n existe pas";
        console.log('Content updated successfully!');
        //window.location.reload();
      }

///////////////////////////
for (let i in this.admin) {
  if(this.adminForm.value.password==this.admin[i].password)
  {

    this.adminfindedpassword.push(this.admin[i]);

  }

}
if(this.adminfindedpassword.length==0)
{
  this.router.navigateByUrl('/admin');
  this.vauesss =  "mot de passe n est pas valide";
  console.log('Content updated successfully!');
  //window.location.reload();
}
else
{

  this.router.navigateByUrl('/adminlistuser');
  this.vauesss =  "welcome";
  console.log('Content updated successfully!');
  //window.location.reload();




}


///////////////////
}

}