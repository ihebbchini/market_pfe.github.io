


import { Carteitem } from './../../model/carteitem';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapicarteitemService } from './../../service/adminapicarteitem.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-detailcarteitembyadmin',
  templateUrl: './detailcarteitembyadmin.component.html',
  styleUrls: ['./detailcarteitembyadmin.component.css']
})
export class DetailcarteitembyadminComponent {


  submitted = false;
  editForm: FormGroup;
  carteitemData: Carteitem[];
  carteitemProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapicarteitemService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updatecarteitem();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getcarteitem(id);
    this.editForm = this.fb.group({
      orderid: ['', [Validators.required]],
      productid: ['', [Validators.required]],
      quantite: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      datemodification: ['', [Validators.required]],


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
  getcarteitem(id) {
    this.apiService.getcarteitem(id).subscribe((data) => {
      this.editForm.setValue({
        orderid: data['orderid'],
        productid: data['productid'],
        quantite: data['quantite'],
        datecreation: data['datecreation'],
        datemodification: data['datemodification'],
      });
    });
  }
  updatecarteitem() {
    this.editForm = this.fb.group({
      orderid: ['', [Validators.required]],
      productid: ['', [Validators.required]],
      quantite: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      datemodification: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updatecarteitem(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistcarteitem');
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