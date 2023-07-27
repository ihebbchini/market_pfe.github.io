


import { Categorieproduct } from './../../model/categorieproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapicategorieproductService } from './../../service/adminapicategorieproduct.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-editcategorieproductbyadmin',
  templateUrl: './editcategorieproductbyadmin.component.html',
  styleUrls: ['./editcategorieproductbyadmin.component.css']
})
export class EditcategorieproductbyadminComponent {


  submitted = false;
  editForm: FormGroup;
  categorieproductData: Categorieproduct[];
  categorieproductProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapicategorieproductService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updatecategorieproduct();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getcategorieproduct(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      datemodification: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getcategorieproduct(id) {
    this.apiService.getcategorieproduct(id).subscribe((data) => {
      this.editForm.setValue({
        name: data['name'],
        datecreation: data['datecreation'],
        datemodification: data['datemodification'],
      });
    });
  }
  updatecategorieproduct() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      datemodification: ['', [Validators.required]],

    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updatecategorieproduct(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistcategorieprodutc');
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }
}