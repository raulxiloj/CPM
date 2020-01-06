import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventosListComponent } from './inventos-list.component';

describe('InventosListComponent', () => {
  let component: InventosListComponent;
  let fixture: ComponentFixture<InventosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
