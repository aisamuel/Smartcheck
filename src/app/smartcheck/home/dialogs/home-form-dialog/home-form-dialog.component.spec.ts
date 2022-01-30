import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFormDialogComponent } from './home-form-dialog.component';

describe('HomeFormDialogComponent', () => {
  let component: HomeFormDialogComponent;
  let fixture: ComponentFixture<HomeFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
