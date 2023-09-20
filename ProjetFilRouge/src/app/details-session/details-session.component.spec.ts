import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSessionComponent } from './details-session.component';

describe('DetailsSessionComponent', () => {
  let component: DetailsSessionComponent;
  let fixture: ComponentFixture<DetailsSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsSessionComponent]
    });
    fixture = TestBed.createComponent(DetailsSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
