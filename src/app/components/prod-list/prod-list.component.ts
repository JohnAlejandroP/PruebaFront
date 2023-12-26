import { Component, inject } from '@angular/core';
import { Todo } from '../../interfaces/todos.interfaces';
import { CommonModule } from '@angular/common';
import { CurrentPipe } from '../../pipes/current.pipe';
import { FormsModule } from '@angular/forms';
import { FinancierosService } from '../../services/financieros.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prod-list',
  standalone: true,
  imports: [CommonModule, CurrentPipe, FormsModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule],
  templateUrl: './prod-list.component.html',
  styleUrl: './prod-list.component.css'
})

export class financierosListComponent {
  private router = inject(Router);
  private financierosService = inject(FinancierosService);
  private financierosSubscription: Subscription;
  public financierosList?: Todo[];
  public list: Todo[] = [];
  public editar: string = '';
  public search: string = '';
  public formEdit: Todo = {
    id: '',
    logo: '',
    nombreProd: '',
    descripcionProd: '',
    fechaLiberacion: '',
    fechaRestructuracion: ''
  };


  constructor() {
    this.financierosSubscription = this.financierosService.getProd().subscribe((financierosList) => {
      this.financierosList = financierosList;
    });
  }

  ngOnInit() {
    this.list = JSON.parse(JSON.stringify(this.financierosList));
  }

  public eliminarProd(id: string): void {
    if (!id) {
      return;
    }
    this.financierosService.removeProd(id);
  }

  public editarProd(id: string): void {
    const prod = this.financierosList?.find((prod) => prod.id === id);
    this.editar = id;
    this.formEdit.id = prod?.id || '';
    this.formEdit.logo = prod?.logo || '';
    this.formEdit.nombreProd = prod?.nombreProd || '';
    this.formEdit.descripcionProd = prod?.descripcionProd || '';
    this.formEdit.fechaLiberacion = prod?.fechaLiberacion || '';
    this.formEdit.fechaRestructuracion = prod?.fechaRestructuracion || '';
  }

  filtrarProd(): void {
    if (this.search === '') {
      this.list = this.financierosList || [];
      return;
    }
    let filterLIst = this.financierosList?.filter((prod) => prod.nombreProd.toLocaleLowerCase().includes(this.search)) || [];
    console.log(filterLIst);
    this.list = filterLIst;
  }


  cancelarEdicion(): void {
    this.editar = '';
    this.formEdit = {
      id: '',
      logo: '',
      nombreProd: '',
      descripcionProd: '',
      fechaLiberacion: '',
      fechaRestructuracion: ''
    };
  }

  guardarEdicion(): void {
    this.editar = '';
    this.financierosService.editProd(this.formEdit);
  }

  goTo(){
    this.router.navigate(['/agregar-producto']);
  }

  ngDestroy() {
    this.financierosSubscription.unsubscribe();
  }
}


