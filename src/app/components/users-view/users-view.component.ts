import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Store } from '@ngrx/store';
import { loadUsers } from 'src/app/store/users/users.actions';
import { usersFeature } from 'src/app/store/users/usersFeature';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})
export class UsersViewComponent implements OnInit {
  data$ = this.store.select(usersFeature.selectData);
  loading$ = this.store.select(usersFeature.selectLoading);
  view = 'cardsView';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  onChange(event: MatButtonToggleChange) {
    this.view = event.value;
  }
}
