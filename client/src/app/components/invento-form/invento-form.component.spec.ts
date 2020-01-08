import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoFormComponent } from './invento-form.component';

describe('InventoFormComponent', () => {
  let component: InventoFormComponent;
  let fixture: ComponentFixture<InventoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
