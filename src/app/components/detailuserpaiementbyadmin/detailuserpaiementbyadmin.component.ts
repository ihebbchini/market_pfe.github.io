

import { Userpaiement } from './../../model/userpaiement';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiuserpaiementService } from './../../service/adminapiuserpaiement.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-detailuserpaiementbyadmin',
  templateUrl: './detailuserpaiementbyadmin.component.html',
  styleUrls: ['./detailuserpaiementbyadmin.component.css']
})
export class DetailuserpaiementbyadminComponent {

  submitted = false;
  editForm: FormGroup;
  userpaiementData: Userpaiement[];
  userpaiementProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiuserpaiementService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateuserpaiement();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getuserpaiement(id);
    this.editForm = this.fb.group({
      userid: ['', [Validators.required]],
      paimenttype: ['', [Validators.required]],
      provider: ['', [Validators.required]],
      acountnumero: ['', [Validators.required]],
      dateexpiration: ['', [Validators.required]],
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
  getuserpaiement(id) {
    this.apiService.getuserpaiement(id).subscribe((data) => {
      this.editForm.setValue({
        userid: data['userid'],
        paimenttype: data['paimenttype'],
        provider: data['provider'],
        acountnumero: data['acountnumero'],
        dateexpiration: data['dateexpiration'],
      });
    });
  }
  updateuserpaiement() {
    this.editForm = this.fb.group({
      userid: ['', [Validators.required]],
      paimenttype: ['', [Validators.required]],
      provider: ['', [Validators.required]],
      acountnumero: ['', [Validators.required]],
      dateexpiration: ['', [Validators.required]],

    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateuserpaiement(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistusepaiment');
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