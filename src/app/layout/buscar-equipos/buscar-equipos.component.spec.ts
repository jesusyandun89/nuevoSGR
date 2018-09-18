import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEquiposComponent } from './buscar-equipos.component';

describe('BuscarEquiposComponent', () => {
  let component: BuscarEquiposComponent;
  let fixture: ComponentFixture<BuscarEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
