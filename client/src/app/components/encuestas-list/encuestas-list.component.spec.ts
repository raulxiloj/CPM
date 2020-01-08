import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestasListComponent } from './encuestas-list.component';

describe('EncuestasListComponent', () => {
  let component: EncuestasListComponent;
  let fixture: ComponentFixture<EncuestasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
