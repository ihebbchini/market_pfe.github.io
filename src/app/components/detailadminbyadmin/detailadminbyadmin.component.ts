



import { Admin } from './../../model/admin';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiadminService } from './../../service/adminapiadmin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-detailadminbyadmin',
  templateUrl: './detailadminbyadmin.component.html',
  styleUrls: ['./detailadminbyadmin.component.css']
})
export class DetailadminbyadminComponent {


  submitted = false;
  editForm: FormGroup;
  adminData: Admin[];
  adminProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiadminService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateadmin();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getadmin(id);
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
  getadmin(id) {
    this.apiService.getadmin(id).subscribe((data) => {
      this.editForm.setValue({
        email: data['email'],
        password: data['password'],

      });
    });
  }
  updateadmin() {
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
        this.apiService.updateadmin(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistadmin');
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