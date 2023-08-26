import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
  })

  constructor (private formBuilder: FormBuilder) {}

  public submitForm () {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm)
      console.log(this.cadastroForm.value.firstName, this.cadastroForm.value.lastName)
    }
  }
}
