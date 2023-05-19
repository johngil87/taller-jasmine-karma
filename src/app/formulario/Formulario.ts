import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class unFormulario {
  public form: FormGroup;
  constructor(fb: FormBuilder) {

    this.form = fb.group(
      {
        email: ['valor inicial', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        user:['',Validators.required, Validators.minLength(4)],
      }
    );

  }
}
