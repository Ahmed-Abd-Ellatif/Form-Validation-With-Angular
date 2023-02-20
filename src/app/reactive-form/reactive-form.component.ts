import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  constructor(private fb: FormBuilder) {}
  dataForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', Validators.required],
    position: ['', Validators.required],
    avilabilityDate: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    salary: ['', Validators.required],
    maritalStatus: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('[0-9 ]{11}')]],
    address: ['', Validators.required],
    attachFile: ['', Validators.required],
  });

  get name() {
    return this.dataForm.get('name');
  }
  get email() {
    return this.dataForm.get('email');
  }
  get position() {
    return this.dataForm.get('position');
  }
  get avilabilityDate() {
    return this.dataForm.get('avilabilityDate');
  }
  get dateOfBirth() {
    return this.dataForm.get('dateOfBirth');
  }
  get salary() {
    return this.dataForm.get('salary');
  }
  get maritalStatus() {
    return this.dataForm.get('maritalStatus');
  }
  get phone() {
    return this.dataForm.get('phone');
  }
  get address() {
    return this.dataForm.get('address');
  }
  get attachFile() {
    return this.dataForm.get('attachFile');
  }

  sendata(data: any) {
    data.reset();
  }
}
