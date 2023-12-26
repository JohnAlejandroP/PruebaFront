import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListComponent } from './prod-list.component';

describe('ProdListComponent', () => {
  let component: ProdListComponent;
  let fixture: ComponentFixture<ProdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('ProdListComponent', () => {
  // ...

  describe('editarProd', () => {
    it('should set editar to the provided id', () => {
      const id = '123';
      component.editarProd(id);
      expect(component.editar).toBe(id);
    });

    it('should populate formEdit with the corresponding product data', () => {
      const id = '123';
      const prod = {
        id: '123',
        logo: 'logo.png',
        nombreProd: 'Product 1',
        descripcionProd: 'Description 1',
        fechaLiberacion: '2022-01-01',
        fechaRestructuracion: '2022-02-01',
      };
      component.financierosList = [prod];
      component.editarProd(id);
      expect(component.formEdit.id).toBe(prod.id);
      expect(component.formEdit.logo).toBe(prod.logo);
      expect(component.formEdit.nombreProd).toBe(prod.nombreProd);
      expect(component.formEdit.descripcionProd).toBe(prod.descripcionProd);
      expect(component.formEdit.fechaLiberacion).toBe(prod.fechaLiberacion);
      expect(component.formEdit.fechaRestructuracion).toBe(prod.fechaRestructuracion);
    });

    it('should populate formEdit with empty values if product is not found', () => {
      const id = '123';
      component.financierosList = [];
      component.editarProd(id);
      expect(component.formEdit.id).toBe('');
      expect(component.formEdit.logo).toBe('');
      expect(component.formEdit.nombreProd).toBe('');
      expect(component.formEdit.descripcionProd).toBe('');
      expect(component.formEdit.fechaLiberacion).toBe('');
      expect(component.formEdit.fechaRestructuracion).toBe('');
    });
  });
});describe('ProdListComponent', () => {
  let component: ProdListComponent;
  let fixture: ComponentFixture<ProdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter the list when search is empty', () => {
    component.search = '';
    component.financierosList = [{ nombreProd: 'Product 1' }, { nombreProd: 'Product 2' }];
    component.filtrarProd();
    expect(component.list).toEqual(component.financierosList);
  });

  it('should filter the list based on the search input', () => {
    component.search = 'Product 1';
    component.financierosList = [{ nombreProd: 'Product 1' }, { nombreProd: 'Product 2' }];
    component.filtrarProd();
    expect(component.list).toEqual([{ nombreProd: 'Product 1' }]);
  });

  it('should filter the list when search is not found', () => {
    component.search = 'Product 3';
    component.financierosList = [{ nombreProd: 'Product 1' }, { nombreProd: 'Product 2' }];
    component.filtrarProd();
    expect(component.list).toEqual([]);
  });
});