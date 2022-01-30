import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsFormDialogComponent } from './applications-form-dialog.component';

describe('ApplicationsFormDialogComponent', () => {
  let component: ApplicationsFormDialogComponent;
  let fixture: ComponentFixture<ApplicationsFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
