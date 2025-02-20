import { Injectable } from '@angular/core';
import { ParameterServicesService } from './parameter-services.service';

@Injectable({
  providedIn: 'root'
})
export class ResetServiceService {

  constructor(private parameterService: ParameterServicesService) { }
  resetservice(){
    this.parameterService.resetvalue();
  }
}
