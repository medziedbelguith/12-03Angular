import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Galerie2Component } from './galerie2.component';

describe('Galerie2Component', () => {
  let component: Galerie2Component;
  let fixture: ComponentFixture<Galerie2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Galerie2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Galerie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
