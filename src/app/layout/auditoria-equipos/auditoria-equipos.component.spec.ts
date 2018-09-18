import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaEquiposComponent } from './auditoria-equipos.component';

describe('AuditoriaEquiposComponent', () => {
  let component: AuditoriaEquiposComponent;
  let fixture: ComponentFixture<AuditoriaEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriaEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriaEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
