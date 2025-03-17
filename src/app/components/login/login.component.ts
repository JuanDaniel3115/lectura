import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
    public dialog: MatDialog,
    private router: Router,
  ){
    this.formLogin = this.from.group({
      name: [null, Validators.required],
      age: [null, [Validators.required, Validators.pattern(/^\d{1,2}$/)]],
    })
  }
  
  login(){
    this.parameterServis.name = this.formLogin.get('name')?.value;
    this.parameterServis.age = this.formLogin.get('age')?.value;

    if (this.parameterServis.age > 10){
      Swal.fire({
        title: 'Edad incorrecta',
        imageUrl: '../../../assets/leonMalo-01.png', 
        imageWidth: 214, 
        imageHeight: 218,
        imageAlt: 'Error',
        customClass: {
          image: 'extreme-shake' 
        }
      });
      this.resetService.resetservice();
      this.formLogin.reset();
    }else{
      localStorage.setItem('isAuthenticated', 'true'); // Guardar sesión
      this.router.navigate(['/Home']);
    }

  }

}
