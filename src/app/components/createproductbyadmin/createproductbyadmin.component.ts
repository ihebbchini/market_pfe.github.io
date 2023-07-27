





import { Router } from '@angular/router';
import { AdminapiproductService } from './../../service/adminapiproduct.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapicategorieproductService } from './../../service/adminapicategorieproduct.service';
import { AdminapiinventoryproductService } from './../../service/adminapiinventoryproduct.service';


@Component({
  selector: 'app-createproductbyadmin',
  templateUrl: './createproductbyadmin.component.html',
  styleUrls: ['./createproductbyadmin.component.css']
})
export class CreateproductbyadminComponent {


  submitted = false;
  productForm: FormGroup;
  categorieproduct:any = [];
  inventoryproduct:any = [];
  productProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiproductService,
    private apiService2: AdminapicategorieproductService,
    private apiService3: AdminapiinventoryproductService
  ) {
    this.mainForm();
    this.readcategorieproduct();
    this.readinventoryproduct();
  }

  readinventoryproduct(){
    this.apiService3.getinventoryproducts().subscribe((data) => {
     this.inventoryproduct = data;
    })    
  }
  readcategorieproduct(){
    this.apiService2.getcategorieproducts().subscribe((data) => {
     this.categorieproduct = data;
    })    
  }


  ngOnInit() {}
  mainForm() {
    this.productForm = this.fb.group({

      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      categorieid: ['', [Validators.required]],
      inventoryid: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discountid: ['', [Validators.required]],
      picture: ['', [Validators.required]],

      datecreation: new Date(),
      datemodification: new Date(),
      userid: ['', [Validators.required]],
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.productForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.productForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.productForm.valid) {
      return false;
    } else {
      return this.apiService.createproduct(this.productForm.value).subscribe({
        complete: () => {
          console.log('admin successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistproduct'));
            window.alert('operation réalisé avec succée');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}