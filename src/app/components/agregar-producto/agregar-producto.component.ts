import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FinancierosService } from '../../services/financieros.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [ReactiveFormsModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  private financierosService = inject(FinancierosService);
  private router = inject(Router);
  public formProducto: FormGroup;

  constructor() {
    this.formProducto = new FormGroup({
      idProd: new FormControl('', [Validators.required]),
      nombreProd: new FormControl('', [Validators.required]),
      descripcionProd: new FormControl('', [Validators.required]),
      logoProd: new FormControl(''),
      fechaLiberacion: new FormControl('', [Validators.required]),
      fechaRestructuracion: new FormControl('', [Validators.required])
    });
  }

  resetForm() {
    this.formProducto.reset();
  }

  guardarEdicion() {  
    this.financierosService.addProd(this.formProducto.value);
    this.router.navigate(['/']);
  }

}
