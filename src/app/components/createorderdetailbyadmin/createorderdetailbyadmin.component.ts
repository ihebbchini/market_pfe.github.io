




import { Router } from '@angular/router';
import { AdminapiorderdetailService } from './../../service/adminapiorderdetail.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-createorderdetailbyadmin',
  templateUrl: './createorderdetailbyadmin.component.html',
  styleUrls: ['./createorderdetailbyadmin.component.css']
})
export class CreateorderdetailbyadminComponent {

  submitted = false;
  orderdetailForm: FormGroup;
  orderdetailProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiorderdetailService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.orderdetailForm = this.fb.group({

      userid: ['', [Validators.required]],
      total: ['', [Validators.required]],
      paimentid: ['', [Validators.required]],

      datecreation: new Date(),
      datemodification: new Date(),
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.orderdetailForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.orderdetailForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.orderdetailForm.valid) {
      return false;
    } else {
      return this.apiService.createorderdetail(this.orderdetailForm.value).subscribe({
        complete: () => {
          console.log('admin successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistorderdetails'));
            window.alert('operation réalisé avec succée');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}