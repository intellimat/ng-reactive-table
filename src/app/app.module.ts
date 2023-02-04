import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { StoreModule } from '@ngrx/store';
import { UsersCardViewComponent } from './components/users-view/users-card-view/users-card-view.component';
import { UsersTableViewComponent } from './components/users-view/users-table-view/users-table-view.component';
import { MaterialModule } from './material/material.module';
import { CardComponent } from './components/shared/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersViewComponent,
    UsersCardViewComponent,
    UsersTableViewComponent,
    CardComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
