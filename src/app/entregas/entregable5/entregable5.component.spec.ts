import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entregable5Component } from './entregable5.component';

describe('Entregable5Component', () => {
  let component: Entregable5Component;
  let fixture: ComponentFixture<Entregable5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Entregable5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Entregable5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
