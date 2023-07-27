


import { Discount } from './../../model/discount';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapidiscountService } from './../../service/adminapidiscount.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-detaildiscountbyadmin',
  templateUrl: './detaildiscountbyadmin.component.html',
  styleUrls: ['./detaildiscountbyadmin.component.css']
})
export class DetaildiscountbyadminComponent {

  submitted = false;
  editForm: FormGroup;
  discountData: Discount[];
  discountProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapidiscountService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updatediscount();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getdiscount(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      pourcentage: ['', [Validators.required]],
      active: ['', [Validators.required]],
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
  getdiscount(id) {
    this.apiService.getdiscount(id).subscribe((data) => {
      this.editForm.setValue({
        name: data['name'],
        description: data['description'],
        pourcentage: data['pourcentage'],
        active: data['active'],
        datecreation: data['datecreation'],
        datemodification: data['datemodification'],
      });
    });
  }
  updatediscount() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      pourcentage: ['', [Validators.required]],
      active: ['', [Validators.required]],
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
        this.apiService.updatediscount(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistdiscount');
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