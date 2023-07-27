




import { Router } from '@angular/router';
import { AdminapiorderitemService } from './../../service/adminapiorderitem.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-createorderitembyadmin',
  templateUrl: './createorderitembyadmin.component.html',
  styleUrls: ['./createorderitembyadmin.component.css']
})
export class CreateorderitembyadminComponent {

  submitted = false;
  orderitemForm: FormGroup;
  orderitemProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiorderitemService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.orderitemForm = this.fb.group({

      orderid: ['', [Validators.required]],
      productid: ['', [Validators.required]],
      quantite: ['', [Validators.required]],

      datecreation: new Date(),
      datemodification: new Date(),
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.orderitemForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.orderitemForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.orderitemForm.valid) {
      return false;
    } else {
      return this.apiService.createorderitem(this.orderitemForm.value).subscribe({
        complete: () => {
          console.log('admin successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistorderitem'));
            window.alert('operation réalisé avec succée');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}