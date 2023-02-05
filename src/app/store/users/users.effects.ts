import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from './users.actions';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      exhaustMap(() =>
        this.usersService.getUsers().pipe(
          map((data) => loadUsersSuccess({ data })),
          catchError(() =>
            of(
              loadUsersFailure({ error: 'Error getting users from API call.' })
            )
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UserService) {}
}
