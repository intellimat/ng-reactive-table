import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCardViewComponent } from './users-card-view.component';

describe('UsersCardViewComponent', () => {
  let component: UsersCardViewComponent;
  let fixture: ComponentFixture<UsersCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCardViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
