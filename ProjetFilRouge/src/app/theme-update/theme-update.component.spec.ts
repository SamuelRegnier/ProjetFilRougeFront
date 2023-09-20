import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeUpdateComponent } from './theme-update.component';

describe('ThemeUpdateComponent', () => {
  let component: ThemeUpdateComponent;
  let fixture: ComponentFixture<ThemeUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeUpdateComponent]
    });
    fixture = TestBed.createComponent(ThemeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
