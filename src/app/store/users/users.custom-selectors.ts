import { createSelector } from '@ngrx/store';
import { usersFeature } from './usersFeature';

export const selectFilteredUsers = createSelector(
  usersFeature.selectUsersState,
  (state) =>
    state.data.filter(
      (user) =>
        user.email.trim().toLowerCase().includes(state.searchWord) ||
        user.name.trim().toLowerCase().includes(state.searchWord)
    )
);
