


import { Orderitem } from './../../model/orderitem';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiorderitemService } from './../../service/adminapiorderitem.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-editorderitembyadmin',
  templateUrl: './editorderitembyadmin.component.html',
  styleUrls: ['./editorderitembyadmin.component.css']
})
export class EditorderitembyadminComponent {


  submitted = false;
  editForm: FormGroup;
  orderitemData: Orderitem[];
  orderitemProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiorderitemService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateorderitem();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getorderitem(id);
    this.editForm = this.fb.group({
      orderid: ['', [Validators.required]],
      productid: ['', [Validators.required]],
      quantite: ['', [Validators.required]],
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
  getorderitem(id) {
    this.apiService.getorderitem(id).subscribe((data) => {
      this.editForm.setValue({
        orderid: data['orderid'],
        productid: data['productid'],
        quantite: data['quantite'],
        datecreation: data['datecreation'],
        datemodification: data['datemodification'],

      });
    });
  }
  updateorderitem() {
    this.editForm = this.fb.group({
      orderid: ['', [Validators.required]],
      productid: ['', [Validators.required]],
      quantite: ['', [Validators.required]],
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
        this.apiService.updateorderitem(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistorderitem');
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