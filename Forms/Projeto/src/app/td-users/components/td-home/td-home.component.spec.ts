import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdHomeComponent } from './td-home.component';

describe('TdHomeComponent', () => {
  let component: TdHomeComponent;
  let fixture: ComponentFixture<TdHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
