




import { Router } from '@angular/router';
import { AdminapishoppingsessionService } from './../../service/adminapishoppingsession.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-createshoppingsessionbyadmin',
  templateUrl: './createshoppingsessionbyadmin.component.html',
  styleUrls: ['./createshoppingsessionbyadmin.component.css']
})
export class CreateshoppingsessionbyadminComponent {

  submitted = false;
  shoppingsessionForm: FormGroup;
  shoppingsessionProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapishoppingsessionService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.shoppingsessionForm = this.fb.group({


      userid: ['', [Validators.required]],
      total: ['', [Validators.required]],

      datecreation: new Date(),
      datemodification: new Date(),
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.shoppingsessionForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.shoppingsessionForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.shoppingsessionForm.valid) {
      return false;
    } else {
      return this.apiService.createshoppingsession(this.shoppingsessionForm.value).subscribe({
        complete: () => {
          console.log('admin successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistshoppingsession'));
            window.alert('operation réalisé avec succée');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}