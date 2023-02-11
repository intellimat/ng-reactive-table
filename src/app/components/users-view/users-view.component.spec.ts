import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { UsersCardsComponent } from './users-cards/users-cards.component';
import { UsersViewComponent } from './users-view.component';

describe('UsersViewComponent', () => {
  let component: UsersViewComponent;
  let fixture: ComponentFixture<UsersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersViewComponent, UsersCardsComponent],
      imports: [
        MatDialogModule,
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
