import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entregable4Component } from './entregable4.component';

describe('Entregable4Component', () => {
  let component: Entregable4Component;
  let fixture: ComponentFixture<Entregable4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Entregable4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Entregable4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
