import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePruebaComponent } from './componente-prueba.component';

describe('ComponentePruebaComponent', () => {
  let component: ComponentePruebaComponent;
  let fixture: ComponentFixture<ComponentePruebaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePruebaComponent]
    });
    fixture = TestBed.createComponent(ComponentePruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
