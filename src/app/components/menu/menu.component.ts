import { Component } from '@angular/core';
import { ParameterServicesService } from 'src/app/services/parameter-services.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(public parameterServices: ParameterServicesService){}
}
