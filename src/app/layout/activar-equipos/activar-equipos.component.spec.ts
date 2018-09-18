import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivarEquiposComponent } from './activar-equipos.component';

describe('ActivarEquiposComponent', () => {
  let component: ActivarEquiposComponent;
  let fixture: ComponentFixture<ActivarEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivarEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivarEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
