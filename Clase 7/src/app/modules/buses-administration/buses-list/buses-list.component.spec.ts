import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusesListComponent } from './buses-list.component';

describe('BusesListComponent', () => {
  let component: BusesListComponent;
  let fixture: ComponentFixture<BusesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusesListComponent]
    });
    fixture = TestBed.createComponent(BusesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
