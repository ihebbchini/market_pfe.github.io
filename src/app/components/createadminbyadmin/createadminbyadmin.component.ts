


import { Router } from '@angular/router';
import { AdminapiadminService } from './../../service/adminapiadmin.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-createadminbyadmin',
  templateUrl: './createadminbyadmin.component.html',
  styleUrls: ['./createadminbyadmin.component.css']
})
export class CreateadminbyadminComponent {


  submitted = false;
  adminForm: FormGroup;
  adminProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiadminService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.adminForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.adminForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.adminForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.adminForm.valid) {
      return false;
    } else {
      return this.apiService.createadmin(this.adminForm.value).subscribe({
        complete: () => {
          console.log('admin successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistadmin'));
            window.alert('operation réalisé avec succée');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}