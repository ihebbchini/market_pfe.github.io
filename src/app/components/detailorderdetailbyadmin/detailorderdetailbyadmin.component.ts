

import { Orderdetail } from './../../model/orderdetail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiorderdetailService } from './../../service/adminapiorderdetail.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detailorderdetailbyadmin',
  templateUrl: './detailorderdetailbyadmin.component.html',
  styleUrls: ['./detailorderdetailbyadmin.component.css']
})
export class DetailorderdetailbyadminComponent {


  submitted = false;
  editForm: FormGroup;
  orderdetailData: Orderdetail[];
  orderdetailProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiorderdetailService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateorderdetail();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getorderdetail(id);
    this.editForm = this.fb.group({
      userid: ['', [Validators.required]],
      total: ['', [Validators.required]],
      paimentid: ['', [Validators.required]],
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
  getorderdetail(id) {
    this.apiService.getorderdetail(id).subscribe((data) => {
      this.editForm.setValue({
        userid: data['userid'],
        total: data['total'],
        paimentid: data['paimentid'],
        datecreation: data['datecreation'],
        datemodification: data['datemodification'],

      });
    });
  }
  updateorderdetail() {
    this.editForm = this.fb.group({
      userid: ['', [Validators.required]],
      total: ['', [Validators.required]],
      paimentid: ['', [Validators.required]],
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
        this.apiService.updateorderdetail(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistorderdetails');
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