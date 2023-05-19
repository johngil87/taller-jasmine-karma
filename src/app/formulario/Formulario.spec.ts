import { FormBuilder } from "@angular/forms";
import { unFormulario } from "./Formulario";

describe('Probando formulario',()=>{
    const component = new unFormulario(new FormBuilder);
    it('prueba de formulario',()=>{
        expect(component.form.contains('user')).toBeTrue();  
        expect(component.form.contains('name')).not.toBeTrue(); 
        expect(component.form.contains('email')).toBeTrue();
        expect(component.form.contains('password')).toBeTrue();  
    });

    it('Validador requerido para email',()=>{
        const control = component.form.get('email');
        control?.setValue('');
        expect(control?.valid).toBeFalse();
    });

    it('Validador requerido password',()=>{
        const control = component.form.get('password');
        control?.setValue('');
        expect(control?.valid).toBeFalse(); 
    });

    it('Validador requerido user',()=>{
        const control = component.form.get('user');
        control?.setValue('');
        expect(control?.valid).toBeFalse(); 
    });

    it('Validador formato email',()=>{
        const control = component.form.get('email');
        control?.setValue('john@gmail.com');
        expect(control?.valid).toBeTrue(); 
    });

  
});