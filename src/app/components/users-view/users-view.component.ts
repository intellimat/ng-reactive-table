import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';
import { loadUsers, setSearchWord } from 'src/app/store/users/users.actions';
import { selectFilteredUsers } from 'src/app/store/users/users.custom-selectors';
import { usersFeature } from 'src/app/store/users/usersFeature';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})
export class UsersViewComponent implements OnInit {
  data$ = this.store.select(selectFilteredUsers);
  loading$ = this.store.select(usersFeature.selectLoading);
  search = new FormControl<string>('');
  view = 'cardsView';

  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.updateUsersState();
  }

  onChange(event: MatButtonToggleChange) {
    this.view = event.value;
  }

  onAddUser() {
    this.dialog.open(AddUserDialogComponent, {
      width: '400px',
    });
  }

  private updateUsersState() {
    this.search.valueChanges
      .pipe(
        filter((searchWord) => searchWord !== null),
        map((searchWord) => searchWord as string),
        map((searchWord: string) => searchWord.toLowerCase())
      )
      .subscribe((searchWord) => {
        this.store.dispatch(setSearchWord({ searchWord }));
      });
  }
}
