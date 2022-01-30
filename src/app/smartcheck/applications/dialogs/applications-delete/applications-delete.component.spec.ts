import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsDeleteComponent } from './applications-delete.component';

describe('ApplicationsDeleteComponent', () => {
  let component: ApplicationsDeleteComponent;
  let fixture: ComponentFixture<ApplicationsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
