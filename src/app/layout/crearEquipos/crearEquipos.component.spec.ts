import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { crearEquiposComponent } from './crearEquipos.component';

describe('crearEquiposComponent', () => {
  let component: crearEquiposComponent;
  let fixture: ComponentFixture<crearEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ crearEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(crearEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
