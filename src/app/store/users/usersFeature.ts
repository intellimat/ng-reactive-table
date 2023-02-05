import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from './users.actions';

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
    }))
  ),
});
