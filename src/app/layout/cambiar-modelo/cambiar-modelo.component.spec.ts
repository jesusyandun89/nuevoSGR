import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarModeloComponent } from './cambiar-modelo.component';

describe('CambiarModeloComponent', () => {
  let component: CambiarModeloComponent;
  let fixture: ComponentFixture<CambiarModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
