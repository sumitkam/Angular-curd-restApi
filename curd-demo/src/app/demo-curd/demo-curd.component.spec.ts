import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCurdComponent } from './demo-curd.component';

describe('DemoCurdComponent', () => {
  let component: DemoCurdComponent;
  let fixture: ComponentFixture<DemoCurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCurdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
