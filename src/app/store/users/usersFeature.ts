import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
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

interface UsersState {
  data: User[];
  loading: boolean;
  error: string;
  dataUpdating: boolean;
}

const initialState: UsersState = {
  data: [],
  loading: false,
  error: '',
  dataUpdating: false,
};

export const usersFeature = createFeature({
  name: 'users',
  reducer: createReducer(
    initialState,
    on(loadUsers, (state) => ({
      ...state,
      loading: true,
    })),
    on(loadUsersSuccess, (state, { data }) => ({
      ...state,
      data,
      loading: false,
      error: '',
    })),
    on(loadUsersFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),
    on(deleteUser, (state) => ({
      ...state,
      dataUpdating: true,
    })),
    on(deleteUserSuccess, (state, { userId }) => ({
      ...state,
      data: state.data.filter((user) => user.id !== userId),
      dataUpdating: false,
    })),
    on(deleteUserFailure, (state, { error }) => ({
      ...state,
      dataUpdating: false,
      error,
    })),
    on(postUser, (state) => ({
      ...state,
      dataUpdating: true,
    })),
    on(postUserSuccess, (state, { user }) => ({
      ...state,
      data: [...state.data, user],
      dataUpdating: false,
    })),
    on(postUserFailure, (state, { error }) => ({
      ...state,
      dataUpdating: false,
      error,
    })),
    on(patchUser, (state) => ({
      ...state,
      dataUpdating: true,
    })),
    on(patchUserSuccess, (state, { user: patchedUser }) => ({
      ...state,
      data: state.data.map((user) => {
        if (user.id === patchedUser.id) return patchedUser;
        else return user;
      }),
      dataUpdating: false,
    })),
    on(patchUserFailure, (state, { error }) => ({
      ...state,
      dataUpdating: false,
      error,
    })),
    on(putUser, (state) => ({
      ...state,
      dataUpdating: true,
    })),
    on(putUserSuccess, (state, { user: putUser }) => ({
      ...state,
      data: state.data.map((user) => {
        if (user.id === putUser.id) return putUser;
        else return user;
      }),
      dataUpdating: false,
    })),
    on(putUserFailure, (state, { error }) => ({
      ...state,
      dataUpdating: false,
      error,
    }))
  ),
});
