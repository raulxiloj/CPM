import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoresListComponent } from './inventores-list.component';

describe('InventoresListComponent', () => {
  let component: InventoresListComponent;
  let fixture: ComponentFixture<InventoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
