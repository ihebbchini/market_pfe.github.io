


import { Inventoryproduct } from './../../model/inventoryproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiinventoryproductService } from './../../service/adminapiinventoryproduct.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-detailinventoryproductbyadmin',
  templateUrl: './detailinventoryproductbyadmin.component.html',
  styleUrls: ['./detailinventoryproductbyadmin.component.css']
})
export class DetailinventoryproductbyadminComponent {

  submitted = false;
  editForm: FormGroup;
  inventoryproductData: Inventoryproduct[];
  inventoryproductProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiinventoryproductService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateinventoryproduct();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getinventoryproduct(id);
    this.editForm = this.fb.group({
      qte: ['', [Validators.required]],
      idproduct: ['', [Validators.required]],
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
  getinventoryproduct(id) {
    this.apiService.getinventoryproduct(id).subscribe((data) => {
      this.editForm.setValue({
        qte: data['qte'],
        idproduct: data['idproduct'],
        datecreation: data['datecreation'],
        datemodification: data['datemodification'],
      });
    });
  }
  updateinventoryproduct() {
    this.editForm = this.fb.group({
      qte: ['', [Validators.required]],
      idproduct: ['', [Validators.required]],
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
        this.apiService.updateinventoryproduct(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistinventoryproduct');
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