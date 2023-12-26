import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todos.interfaces';
import { BehaviorSubject, Observable } from 'rxjs';


const productFinancieros: Todo[] = [
  {
    id: '1',
    logo: '',
    nombreProd: 'cartera',
    descripcionProd: 'cartera de clientes',
    fechaLiberacion: '2016-09-14',
    fechaRestructuracion: '2016-12-08'
  },
  {
    id: '2',
    logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
    nombreProd: 'venta',
    descripcionProd: 'venta de productos',
    fechaLiberacion: '2016-09-14',
    fechaRestructuracion: '2016-12-08'
  },
  {
    id: '3',
    logo: '',
    nombreProd: 'compra',
    descripcionProd: 'compra de productos',
    fechaLiberacion: '2016-09-14',
    fechaRestructuracion: '2016-12-08'
  },
  {
    id: '4',
    logo: '',
    nombreProd: 'Trato con proveedores',
    descripcionProd: 'trato con proveedores',
    fechaLiberacion: new Date(),
    fechaRestructuracion: new Date('2016-12-08'),
  },
  {
    id: '5',
    logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
    nombreProd: 'Trato con clientes',
    descripcionProd: 'trato con clientes',
    fechaLiberacion: '2016-09-14',
    fechaRestructuracion: '2016-12-08'
  },
  {
    id: '6',
    logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
    nombreProd: 'Trato con bancos',
    descripcionProd: 'trato con bancos',
    fechaLiberacion: '2016-09-14',
    fechaRestructuracion: '2016-12-08'
  }
];


@Injectable({
  providedIn: 'root'
})
export class FinancierosService {
  private todos: Todo[] = productFinancieros;
  private financierosSubject = new BehaviorSubject<Todo[]>(this.todos);

    public addProd(prod: Todo): void {
      this.todos.push(prod);
    }

  public removeProd(todoID: Todo['id']): void {
    this.todos = this.todos.filter((todo) => todo.id !== todoID);
    this.updateTodos();
  }

  public editProd(prod: Todo): void {
    const index = this.todos.findIndex((todo) => todo.id === prod.id);
    this.todos[index] = prod;
    this.updateTodos();
  }

  public getProd():Observable<Todo[]> {
    return this.financierosSubject.asObservable();
  }

  private updateTodos(): void {
    this.financierosSubject.next(this.todos);
  }
  
}