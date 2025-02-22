import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {switchAll} from 'rxjs';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  standalone: true,
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(17)]],
      email: ['', [Validators.required, Validators.email]],
      aceptaTerminos: [false, Validators.requiredTrue]
    });
  }

  route: ActivatedRoute = inject(ActivatedRoute);
  submitForm(): void {
    if (this.formulario.valid) {
      const nombre = this.formulario.get('nombre')?.value;
      alert(`Hola ${nombre}!`);
    }
  }
}
