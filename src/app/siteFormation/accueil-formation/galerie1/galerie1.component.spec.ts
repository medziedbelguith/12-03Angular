import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Galerie1Component } from './galerie1.component';

describe('Galerie1Component', () => {
  let component: Galerie1Component;
  let fixture: ComponentFixture<Galerie1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Galerie1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Galerie1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
