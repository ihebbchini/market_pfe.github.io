






import { Router } from '@angular/router';
import { AdminapiuserprofilService } from './../../service/adminapiuserprofil.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-createuserprofilbyadmin',
  templateUrl: './createuserprofilbyadmin.component.html',
  styleUrls: ['./createuserprofilbyadmin.component.css']
})
export class CreateuserprofilbyadminComponent {


  submitted = false;
  userprofilForm: FormGroup;
  userprofilProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiuserprofilService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.userprofilForm = this.fb.group({

      name: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      specialite: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
      description: ['', [Validators.required]],

    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.userprofilForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.userprofilForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.userprofilForm.valid) {
      return false;
    } else {
      return this.apiService.createuserprofil(this.userprofilForm.value).subscribe({
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