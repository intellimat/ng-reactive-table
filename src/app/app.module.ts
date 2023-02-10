import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { UsersTableComponent } from './components/users-view/users-table/users-table.component';
import { NgrxModule } from './store/ngrx.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { UsersCardsComponent } from './components/users-view/users-cards/users-cards.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserDialogComponent } from './components/users-view/add-user-dialog/add-user-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersViewComponent,
    UsersCardsComponent,
    UsersTableComponent,
    AddUserDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgrxModule,
    NgxSkeletonLoaderModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
