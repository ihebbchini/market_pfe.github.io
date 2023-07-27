



import { Router } from '@angular/router';
import { AdminapinotificationService } from './../../service/adminapinotification.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-createnotificationbyadmin',
  templateUrl: './createnotificationbyadmin.component.html',
  styleUrls: ['./createnotificationbyadmin.component.css']
})
export class CreatenotificationbyadminComponent {

  submitted = false;
  notificationForm: FormGroup;
  notificationProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapinotificationService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.notificationForm = this.fb.group({

      idenvoie: ['', [Validators.required]],
      idreception: ['', [Validators.required]],
      titre: ['', [Validators.required]],
      texte: ['', [Validators.required]],
      etat: ['', [Validators.required]],

      datecreation: new Date(),
      datemodification: new Date(),
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.notificationForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.notificationForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.notificationForm.valid) {
      return false;
    } else {
      return this.apiService.createnotification(this.notificationForm.value).subscribe({
        complete: () => {
          console.log('admin successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistnotification'));
            window.alert('operation réalisé avec succée');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}