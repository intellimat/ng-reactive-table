import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { loadUsers } from 'src/app/store/users/users.actions';
import { usersFeature } from 'src/app/store/users/usersFeature';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})
export class UsersViewComponent implements OnInit {
  data$ = this.store.select(usersFeature.selectData);
  loading$ = this.store.select(usersFeature.selectLoading);

  view = 'tableView';

  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  onChange(event: MatButtonToggleChange) {
    this.view = event.value;
  }

  onAddUser() {
    this.dialog.open(AddUserDialogComponent, {
      width: '400px',
    });
  }
}
