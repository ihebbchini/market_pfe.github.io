


import { Userprofil } from './../../model/userprofil';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiuserprofilService } from './../../service/adminapiuserprofil.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-edituserprofilbyadmin',
  templateUrl: './edituserprofilbyadmin.component.html',
  styleUrls: ['./edituserprofilbyadmin.component.css']
})
export class EdituserprofilbyadminComponent {


  submitted = false;
  editForm: FormGroup;
  userprofilData: Userprofil[];
  userprofilProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiuserprofilService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateuserprofil();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getuserprofil(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      specialite: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
      description: ['', [Validators.required]],
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
  getuserprofil(id) {
    this.apiService.getuserprofil(id).subscribe((data) => {
      this.editForm.setValue({
        name: data['name'],
        adresse: data['adresse'],
        phone: data['phone'],
        specialite: data['specialite'],
        avatar: data['avatar'],
        description: data['description'],

      });
    });
  }
  updateuserprofil() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      specialite: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
      description: ['', [Validators.required]],


    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateuserprofil(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistuserprofil');
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