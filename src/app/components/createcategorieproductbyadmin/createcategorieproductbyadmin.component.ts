



import { Router } from '@angular/router';
import { AdminapicategorieproductService } from './../../service/adminapicategorieproduct.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-createcategorieproductbyadmin',
  templateUrl: './createcategorieproductbyadmin.component.html',
  styleUrls: ['./createcategorieproductbyadmin.component.css']
})
export class CreatecategorieproductbyadminComponent {


  submitted = false;
  categorieproductForm: FormGroup;
  categorieproductProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapicategorieproductService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.categorieproductForm = this.fb.group({

      name: ['', [Validators.required]],
      datecreation: new Date(),
      datemodification: new Date(),
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.categorieproductForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.categorieproductForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.categorieproductForm.valid) {
      return false;
    } else {
      return this.apiService.createcategorieproduct(this.categorieproductForm.value).subscribe({
        complete: () => {
          console.log('admin successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistcategorieprodutc'));
            window.alert('operation réalisé avec succée');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}