


import { Inventoryproduct } from './../../model/inventoryproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserapiinventoryproductService } from './../../service/userapiinventoryproduct.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-editinventoryproductbyuser',
  templateUrl: './editinventoryproductbyuser.component.html',
  styleUrls: ['./editinventoryproductbyuser.component.css']
})
export class EditinventoryproductbyuserComponent {


  submitted = false;
  editForm: FormGroup;
  inventoryproductData: Inventoryproduct[];
  inventoryproductProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: UserapiinventoryproductService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateinventoryproduct();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getinventoryproduct(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
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
  getinventoryproduct(id) {
    this.apiService.getinventoryproduct(id).subscribe((data) => {
      this.editForm.setValue({
        name: data['name'],
        email: data['email'],
        designation: data['designation'],
        phoneNumber: data['phoneNumber'],
      });
    });
  }
  updateinventoryproduct() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateinventoryproduct(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/inventoryproducts-list');
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