import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaFormComponent } from './encuesta-form.component';

describe('EncuestaFormComponent', () => {
  let component: EncuestaFormComponent;
  let fixture: ComponentFixture<EncuestaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
