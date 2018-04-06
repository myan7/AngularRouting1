import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MingComponent } from './ming.component';

describe('MingComponent', () => {
  let component: MingComponent;
  let fixture: ComponentFixture<MingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
