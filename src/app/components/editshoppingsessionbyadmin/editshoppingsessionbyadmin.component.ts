


import { Shoppingsession } from './../../model/shoppingsession';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapishoppingsessionService } from './../../service/adminapishoppingsession.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-editshoppingsessionbyadmin',
  templateUrl: './editshoppingsessionbyadmin.component.html',
  styleUrls: ['./editshoppingsessionbyadmin.component.css']
})
export class EditshoppingsessionbyadminComponent {


  submitted = false;
  editForm: FormGroup;
  shoppingsessionData: Shoppingsession[];
  shoppingsessionProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapishoppingsessionService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateshoppingsession();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getshoppingsession(id);
    this.editForm = this.fb.group({
      userid: ['', [Validators.required]],
      total: ['', [Validators.required]],
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
  getshoppingsession(id) {
    this.apiService.getshoppingsession(id).subscribe((data) => {
      this.editForm.setValue({
        userid: data['userid'],
        total: data['total'],
        datecreation: data['datecreation'],
        datemodification: data['datemodification'],
      });
    });
  }
  updateshoppingsession() {
    this.editForm = this.fb.group({
      userid: ['', [Validators.required]],
      total: ['', [Validators.required]],
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
        this.apiService.updateshoppingsession(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistshoppingsession');
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