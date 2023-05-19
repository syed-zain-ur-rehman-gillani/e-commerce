import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdOperationComponent } from './curd-operation.component';

describe('CurdOperationComponent', () => {
  let component: CurdOperationComponent;
  let fixture: ComponentFixture<CurdOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurdOperationComponent]
    });
    fixture = TestBed.createComponent(CurdOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
