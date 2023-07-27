


import { Message } from './../../model/message';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapimessageService } from './../../service/adminapimessage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-editmessagebyadmin',
  templateUrl: './editmessagebyadmin.component.html',
  styleUrls: ['./editmessagebyadmin.component.css']
})
export class EditmessagebyadminComponent {


  submitted = false;
  editForm: FormGroup;
  messageData: Message[];
  messageProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapimessageService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updatemessage();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getmessage(id);
    this.editForm = this.fb.group({
      idenvoie: ['', [Validators.required]],
      idreception: ['', [Validators.required]],
      titre: ['', [Validators.required]],
      texte: ['', [Validators.required]],
      etat: ['', [Validators.required]],
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
  getmessage(id) {
    this.apiService.getmessage(id).subscribe((data) => {
      this.editForm.setValue({
        idenvoie: data['idenvoie'],
        idreception: data['idreception'],
        titre: data['titre'],
        texte: data['texte'],
        etat: data['etat'],
        datecreation: data['datecreation'],
        datemodification: data['datemodification'],
      });
    });
  }
  updatemessage() {
    this.editForm = this.fb.group({
      idenvoie: ['', [Validators.required]],
      idreception: ['', [Validators.required]],
      titre: ['', [Validators.required]],
      texte: ['', [Validators.required]],
      etat: ['', [Validators.required]],
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
        this.apiService.updatemessage(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistmessage');
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