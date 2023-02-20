import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent {
  userModel = {
    name: '',
    email: '',
    position: '',
    avilabilityDate: '',
    dateOfBirth: '',
    salary: '',
    maritalStatus: '',
    phone: '',
    address: '',
    attachFile: '',
  };

  SendData(data: any) {
    data.reset();
  }
}
