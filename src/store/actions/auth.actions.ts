import { createAction, props } from "@ngrx/store";
import { User } from '../models/user';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGOUT = '[Auth] Logout',
}


export const login = createAction(
    AuthActionTypes.LOGIN,
    props<{user: User}>()
);

export const logout = createAction(
    AuthActionTypes.LOGOUT,
    props<{user: User}>()
);
