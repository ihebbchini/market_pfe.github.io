


import { Router } from '@angular/router';
import { AdminapidiscountService } from './../../service/adminapidiscount.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-creatediscountbyadmin',
  templateUrl: './creatediscountbyadmin.component.html',
  styleUrls: ['./creatediscountbyadmin.component.css']
})
export class CreatediscountbyadminComponent {


  submitted = false;
  discountForm: FormGroup;
  discountProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapidiscountService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.discountForm = this.fb.group({

      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      pourcentage: ['', [Validators.required]],
      active: ['', [Validators.required]],

      datecreation: new Date(),
      datemodification: new Date(),
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.discountForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.discountForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.discountForm.valid) {
      return false;
    } else {
      return this.apiService.creatediscount(this.discountForm.value).subscribe({
        complete: () => {
          console.log('admin successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistdiscount'));
            window.alert('operation réalisé avec succée');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}