export interface UserState {
  email: string;
  password: string;
}

export enum UserActionTypes {
  ADD_USER_INFO = "ADD_USER_INFO",
}

export interface AddUserAction {
  type: UserActionTypes.ADD_USER_INFO;
  payload: string;
}

export type UserAction = AddUserAction;
