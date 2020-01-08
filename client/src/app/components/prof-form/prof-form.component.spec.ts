import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfFormComponent } from './prof-form.component';

describe('ProfFormComponent', () => {
  let component: ProfFormComponent;
  let fixture: ComponentFixture<ProfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
