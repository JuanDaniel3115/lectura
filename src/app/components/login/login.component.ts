import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ParameterServicesService } from 'src/app/services/parameter-services.service';
import { ResetServiceService } from 'src/app/services/reset-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;
  formLogin: FormGroup;
  constructor(
    private parameterServis: ParameterServicesService,
    private resetService: ResetServiceService,
    private from: FormBuilder,
    public dialog: MatDialog
  ){
    this.formLogin = this.from.group({
      name: [null, Validators.required],
      age: [null, [Validators.required, Validators.pattern(/^\d{2}$/)]],
    })
  }
  login(){
    this.parameterServis.name = this.formLogin.get('name')?.value;
    console.log("this.parameterServis.name: ", this.parameterServis.name);
    this.parameterServis.age = this.formLogin.get('age')?.value;
    console.log("this.parameterServis.age: ", this.parameterServis.age);
    if (this.parameterServis.age > 10){
      Swal.fire({
        title: 'Edad incorrecta',
        icon: 'error'
      })
      this.resetService.resetservice();

      this.formLogin = this.from.group({
        name: [null, Validators.required],
        age: [null, [Validators.required, Validators.pattern(/^\d{2}$/)]],
      })

    }

  }

}
