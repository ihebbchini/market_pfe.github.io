


import { Paymentdetail } from './../../model/paymentdetail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapipaymentdetailService } from './../../service/adminapipaymentdetail.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-editpaymentdetailbyadmin',
  templateUrl: './editpaymentdetailbyadmin.component.html',
  styleUrls: ['./editpaymentdetailbyadmin.component.css']
})
export class EditpaymentdetailbyadminComponent {


  submitted = false;
  editForm: FormGroup;
  paymentdetailData: Paymentdetail[];
  paymentdetailProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapipaymentdetailService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updatepaymentdetail();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getpaymentdetail(id);
    this.editForm = this.fb.group({
      orderid: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      provider: ['', [Validators.required]],
      status: ['', [Validators.required]],
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
  getpaymentdetail(id) {
    this.apiService.getpaymentdetail(id).subscribe((data) => {
      this.editForm.setValue({
        orderid: data['orderid'],
        amount: data['amount'],
        provider: data['provider'],
        status: data['status'],
        datecreation: data['datecreation'],
        datemodification: data['datemodification'],

      });
    });
  }
  updatepaymentdetail() {
    this.editForm = this.fb.group({
      orderid: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      provider: ['', [Validators.required]],
      status: ['', [Validators.required]],
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
        this.apiService.updatepaymentdetail(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistpaimentdetail');
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