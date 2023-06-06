import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsListComponent } from './persons-list.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

describe('PersonListComponent', () => {
  let component: PersonsListComponent;
  let fixture: ComponentFixture<PersonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsListComponent ],
      imports: [HttpClientModule, RouterTestingModule, MatDialogModule, MatProgressSpinnerModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia mostrar el spinner', () => {
    component.loading = false;
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('.progress');
    expect(button).toBeFalsy();
  });
});
