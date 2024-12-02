import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entregable3Component } from './entregable3.component';

describe('Entregable3Component', () => {
  let component: Entregable3Component;
  let fixture: ComponentFixture<Entregable3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Entregable3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Entregable3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
