import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotComponent } from './quot.component';

describe('QuotComponent', () => {
  let component: QuotComponent;
  let fixture: ComponentFixture<QuotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
