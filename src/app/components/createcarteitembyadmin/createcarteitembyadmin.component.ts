



import { Router } from '@angular/router';
import { AdminapicarteitemService } from './../../service/adminapicarteitem.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-createcarteitembyadmin',
  templateUrl: './createcarteitembyadmin.component.html',
  styleUrls: ['./createcarteitembyadmin.component.css']
})
export class CreatecarteitembyadminComponent {


  submitted = false;
  carteitemForm: FormGroup;
  carteitemProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapicarteitemService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.carteitemForm = this.fb.group({

      orderid: ['', [Validators.required]],
      productid: ['', [Validators.required]],
      quantite:['', [Validators.required]],
      datecreation: new Date(),
      datemodification: new Date(),
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.carteitemForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.carteitemForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.carteitemForm.valid) {
      return false;
    } else {
      return this.apiService.createcarteitem(this.carteitemForm.value).subscribe({
        complete: () => {
          console.log('admin successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistcarteitem'));
            window.alert('operation réalisé avec succée');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}