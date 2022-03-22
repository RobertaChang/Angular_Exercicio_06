import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactHomeComponent } from './react-home.component';

describe('ReactHomeComponent', () => {
  let component: ReactHomeComponent;
  let fixture: ComponentFixture<ReactHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
