// auth.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { User } from '../models/user';

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, { user }) => {
    return { ...state, user, isAuthenticated: true };
  }),
  on(AuthActions.logout, (state) => {
    return { ...state, user: null, isAuthenticated: false };
  })
);