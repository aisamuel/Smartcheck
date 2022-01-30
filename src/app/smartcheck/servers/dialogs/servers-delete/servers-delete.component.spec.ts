import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersDeleteComponent } from './servers-delete.component';

describe('ServersDeleteComponent', () => {
  let component: ServersDeleteComponent;
  let fixture: ComponentFixture<ServersDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
