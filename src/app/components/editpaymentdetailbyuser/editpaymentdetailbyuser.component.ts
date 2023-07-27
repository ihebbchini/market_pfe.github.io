


import { Paymentdetail } from './../../model/paymentdetail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserapipaymentdetailService } from './../../service/userapipaymentdetail.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-editpaymentdetailbyuser',
  templateUrl: './editpaymentdetailbyuser.component.html',
  styleUrls: ['./editpaymentdetailbyuser.component.css']
})
export class EditpaymentdetailbyuserComponent {


  submitted = false;
  editForm: FormGroup;
  paymentdetailData: Paymentdetail[];
  paymentdetailProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: UserapipaymentdetailService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updatepaymentdetail();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getpaymentdetail(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
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
        name: data['name'],
        email: data['email'],
        designation: data['designation'],
        phoneNumber: data['phoneNumber'],
      });
    });
  }
  updatepaymentdetail() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
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
            this.router.navigateByUrl('/paymentdetails-list');
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