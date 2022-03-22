import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDialogComponent } from './td-dialog.component';

describe('TdDialogComponent', () => {
  let component: TdDialogComponent;
  let fixture: ComponentFixture<TdDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
