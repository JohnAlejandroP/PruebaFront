import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProductoComponent } from './agregar-producto.component';

describe('AgregarProductoComponent', () => {
  let component: AgregarProductoComponent;
  let fixture: ComponentFixture<AgregarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
it('should reset the form', () => {
  // Arrange
  component.formProducto.setValue({
    // Set the form values here
  });

  // Act
  component.resetForm();

  // Assert
  expect(component.formProducto.value).toEqual({
    // Assert the expected form values after resetting
  });
});