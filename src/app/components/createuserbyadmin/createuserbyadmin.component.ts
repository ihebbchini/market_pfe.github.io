




import { Router } from '@angular/router';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-createuserbyadmin',
  templateUrl: './createuserbyadmin.component.html',
  styleUrls: ['./createuserbyadmin.component.css']
})
export class CreateuserbyadminComponent {


  submitted = false;
  userForm: FormGroup;
  userProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiuserService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.userForm = this.fb.group({


      email: ['', [Validators.required]],
      password: ['', [Validators.required]],

    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.userForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.userForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      return false;
    } else {
      return this.apiService.createuser(this.userForm.value).subscribe({
        complete: () => {
          console.log('admin successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistuser'));
            window.alert('operation réalisé avec succée');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}