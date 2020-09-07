import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyOrderDialogComponent } from './verify-order-dialog.component';

describe('VerifyOrderDialogComponent', () => {
  let component: VerifyOrderDialogComponent;
  let fixture: ComponentFixture<VerifyOrderDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyOrderDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
