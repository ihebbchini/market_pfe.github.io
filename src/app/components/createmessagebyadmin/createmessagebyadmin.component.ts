



import { Router } from '@angular/router';
import { AdminapimessageService } from './../../service/adminapimessage.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-createmessagebyadmin',
  templateUrl: './createmessagebyadmin.component.html',
  styleUrls: ['./createmessagebyadmin.component.css']
})
export class CreatemessagebyadminComponent {


  submitted = false;
  messageForm: FormGroup;
  messageProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapimessageService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.messageForm = this.fb.group({

      idenvoie: ['', [Validators.required]],
      idreception: ['', [Validators.required]],
      titre: ['', [Validators.required]],
      texte: ['', [Validators.required]],
      etat: ['', [Validators.required]],

      datecreation: new Date(),
      datemodification: new Date(),
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.messageForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.messageForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.messageForm.valid) {
      return false;
    } else {
      return this.apiService.createmessage(this.messageForm.value).subscribe({
        complete: () => {
          console.log('admin successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistmessage'));
            window.alert('operation réalisé avec succée');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}