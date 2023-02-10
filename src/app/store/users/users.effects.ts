import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import {
  deleteUser,
  deleteUserFailure,
  deleteUserSuccess,
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
  patchUser,
  patchUserFailure,
  patchUserSuccess,
  postUser,
  postUserFailure,
  postUserSuccess,
  putUser,
  putUserFailure,
  putUserSuccess,
} from './users.actions';

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
              loadUsersFailure({
                error: 'Error from API call: could not get users',
              })
            )
          )
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      exhaustMap(({ userId }) =>
        this.usersService.deleteUser(userId).pipe(
          map(() => deleteUserSuccess({ userId })),
          catchError(() =>
            of(
              deleteUserFailure({
                error: `Error from API call: could not delete user ${userId}`,
              })
            )
          )
        )
      )
    )
  );

  postUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postUser),
      exhaustMap(({ user: requestBodyUser }) =>
        this.usersService.postUser(requestBodyUser).pipe(
          map((createdUser) => postUserSuccess({ user: createdUser })),
          catchError(() =>
            of(
              postUserFailure({
                error: `Error from API call: could not post user ${JSON.stringify(
                  requestBodyUser
                )}`,
              })
            )
          )
        )
      )
    )
  );

  patchUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(patchUser),
      exhaustMap(({ user }) =>
        this.usersService.patchUser(user).pipe(
          map(() => patchUserSuccess({ user })),
          catchError(() =>
            of(
              patchUserFailure({
                error: `Error from API call: could not patch user ${JSON.stringify(
                  user
                )}`,
              })
            )
          )
        )
      )
    )
  );

  putUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(putUser),
      exhaustMap(({ user }) =>
        this.usersService.putUser(user).pipe(
          map(() => putUserSuccess({ user })),
          catchError(() =>
            of(
              putUserFailure({
                error: `Error from API call: could not put user ${JSON.stringify(
                  user
                )}`,
              })
            )
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UserService) {}
}
