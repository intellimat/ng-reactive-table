import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map,
  catchError,
  exhaustMap,
  switchMap,
  concatMap,
  mergeMap,
} from 'rxjs/operators';
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
                error: {
                  description: 'Error from API call: could not get users',
                  action: 'loadUsers',
                },
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
      mergeMap(({ userId }) =>
        this.usersService.deleteUser(userId).pipe(
          map(() => deleteUserSuccess({ userId })),
          catchError(() =>
            of(
              deleteUserFailure({
                error: {
                  description: 'Error from API call: could not delete user',
                  action: 'deleteUser',
                  userId,
                },
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
      mergeMap(({ user: requestBodyUser }) =>
        this.usersService.postUser(requestBodyUser).pipe(
          map((createdUser) => postUserSuccess({ user: createdUser })), // newly created user has an id
          catchError(() =>
            of(
              postUserFailure({
                error: {
                  description: 'Error from API call: could not post user',
                  action: 'postUser',
                },
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
      mergeMap(({ user }) =>
        this.usersService.patchUser(user).pipe(
          map(() => patchUserSuccess({ user })),
          catchError(() =>
            of(
              patchUserFailure({
                error: {
                  description: 'Error from API call: could not patch user',
                  action: 'patchUser',
                  userId: user.id,
                },
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
      mergeMap(({ user }) =>
        this.usersService.putUser(user).pipe(
          map(() => putUserSuccess({ user })),
          catchError(() =>
            of(
              putUserFailure({
                error: {
                  description: 'Error from API call: could not put user',
                  action: 'putUser',
                  userId: user.id,
                },
              })
            )
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UserService) {}
}
