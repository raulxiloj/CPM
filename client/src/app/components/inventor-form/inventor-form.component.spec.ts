import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorFormComponent } from './inventor-form.component';

describe('InventorFormComponent', () => {
  let component: InventorFormComponent;
  let fixture: ComponentFixture<InventorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
