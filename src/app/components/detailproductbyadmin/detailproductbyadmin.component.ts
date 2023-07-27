


import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiproductService } from './../../service/adminapiproduct.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detailproductbyadmin',
  templateUrl: './detailproductbyadmin.component.html',
  styleUrls: ['./detailproductbyadmin.component.css']
})
export class DetailproductbyadminComponent {


  submitted = false;
  editForm: FormGroup;
  productData: Product[];
  productProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiproductService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateproduct();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getproduct(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      categorieid: ['', [Validators.required]],
      inventoryid: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discountid: ['', [Validators.required]],
      picture: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      datemodification: ['', [Validators.required]],
      userid: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getproduct(id) {
    this.apiService.getproduct(id).subscribe((data) => {
      this.editForm.setValue({
        name: data['name'],
        description: data['description'],
        categorieid: data['categorieid'],
        inventoryid: data['inventoryid'],
        price: data['price'],
        discountid: data['discountid'],
        picture: data['picture'],
        datecreation: data['datecreation'],
        datemodification: data['datemodification'],
        userid: data['phoneNumber'],

      });
    });
  }
  updateproduct() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      categorieid: ['', [Validators.required]],
      inventoryid: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discountid: ['', [Validators.required]],
      picture: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      datemodification: ['', [Validators.required]],
      userid: ['', [Validators.required]],


    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateproduct(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistproduct');
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }
}