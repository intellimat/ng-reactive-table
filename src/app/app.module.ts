import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { UsersTableComponent } from './components/users-view/users-table/users-table.component';
import { MaterialModule } from './material/material.module';
import { CardComponent } from './components/shared/card/card.component';
import { NgrxModule } from './store/ngrx.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { UsersCardsComponent } from './components/users-view/users-cards/users-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersViewComponent,
    UsersCardsComponent,
    UsersTableComponent,
    CardComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgrxModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
