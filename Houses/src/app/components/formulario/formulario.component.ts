import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
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

  constructor(public formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      name: ""
    })
  }

  route: ActivatedRoute = inject(ActivatedRoute);
  submitForm(): void {
    alert("Hola" + this.formulario.value.name);
  }

  protected readonly document = document;
}
