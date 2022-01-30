import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersFormDialogComponent } from './servers-form-dialog.component';

describe('ServersFormDialogComponent', () => {
  let component: ServersFormDialogComponent;
  let fixture: ComponentFixture<ServersFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
