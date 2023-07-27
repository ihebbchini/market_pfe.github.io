


import { Router } from '@angular/router';
import { AdminapiinventoryproductService } from './../../service/adminapiinventoryproduct.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AdminapiproductService } from './../../service/adminapiproduct.service';

@Component({
  selector: 'app-createinventoryproductbyadmin',
  templateUrl: './createinventoryproductbyadmin.component.html',
  styleUrls: ['./createinventoryproductbyadmin.component.css']
})
export class CreateinventoryproductbyadminComponent {


  submitted = false;
  inventoryproductForm: FormGroup;
  product:any = [];
  inventoryproductProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiinventoryproductService,
    private apiService2: AdminapiproductService
  ) {
    this.mainForm();
    this.readproduct();
  }

  readproduct(){
    this.apiService2.getproducts().subscribe((data) => {
     this.product = data;
    })    
  }



  ngOnInit() {}
  mainForm() {
    this.inventoryproductForm = this.fb.group({

      qte: ['', [Validators.required]],
      idproduct: ['', [Validators.required]],

      datecreation: new Date(),
      datemodification: new Date(),
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.inventoryproductForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.inventoryproductForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.inventoryproductForm.valid) {
      return false;
    } else {
      return this.apiService.createinventoryproduct(this.inventoryproductForm.value).subscribe({
        complete: () => {
          console.log('admin successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistinventoryproduct'));
            window.alert('operation réalisé avec succée');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}