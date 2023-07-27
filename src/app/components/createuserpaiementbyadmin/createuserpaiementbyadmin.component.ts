



import { Router } from '@angular/router';
import { AdminapiuserpaiementService } from './../../service/adminapiuserpaiement.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-createuserpaiementbyadmin',
  templateUrl: './createuserpaiementbyadmin.component.html',
  styleUrls: ['./createuserpaiementbyadmin.component.css']
})
export class CreateuserpaiementbyadminComponent {


  submitted = false;
  userpaiementForm: FormGroup;
  userpaiementProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiuserpaiementService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.userpaiementForm = this.fb.group({


      userid: ['', [Validators.required]],
      paimenttype: ['', [Validators.required]],
      provider: ['', [Validators.required]],
      acountnumero: ['', [Validators.required]],
      dateexpiration: ['', [Validators.required]],

    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.userpaiementForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.userpaiementForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.userpaiementForm.valid) {
      return false;
    } else {
      return this.apiService.createuserpaiement(this.userpaiementForm.value).subscribe({
        complete: () => {
          console.log('admin successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistusepaiment'));
            window.alert('operation réalisé avec succée');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}