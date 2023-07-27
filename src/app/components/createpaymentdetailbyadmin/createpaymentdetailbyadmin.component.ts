




import { Router } from '@angular/router';
import { AdminapipaymentdetailService } from './../../service/adminapipaymentdetail.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-createpaymentdetailbyadmin',
  templateUrl: './createpaymentdetailbyadmin.component.html',
  styleUrls: ['./createpaymentdetailbyadmin.component.css']
})
export class CreatepaymentdetailbyadminComponent {

  submitted = false;
  paymentdetailForm: FormGroup;
  paymentdetailProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapipaymentdetailService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.paymentdetailForm = this.fb.group({

      orderid: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      provider: ['', [Validators.required]],
      status: ['', [Validators.required]],

      datecreation: new Date(),
      datemodification: new Date(),
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.paymentdetailForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.paymentdetailForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.paymentdetailForm.valid) {
      return false;
    } else {
      return this.apiService.createpaymentdetail(this.paymentdetailForm.value).subscribe({
        complete: () => {
          console.log('admin successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistpaimentdetail'));
            window.alert('operation réalisé avec succée');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}