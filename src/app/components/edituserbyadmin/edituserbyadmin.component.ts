


import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-edituserbyadmin',
  templateUrl: './edituserbyadmin.component.html',
  styleUrls: ['./edituserbyadmin.component.css']
})
export class EdituserbyadminComponent {


  submitted = false;
  editForm: FormGroup;
  userData: User[];
  userProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiuserService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateuser();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getuser(id);
    this.editForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
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
  getuser(id) {
    this.apiService.getuser(id).subscribe((data) => {
      this.editForm.setValue({
        email: data['email'],
        password: data['password'],

      });
    });
  }
  updateuser() {
    this.editForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],

    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateuser(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistuser');
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