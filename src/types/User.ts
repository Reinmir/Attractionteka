export interface UserState {
  user: UserData | null;
  isAuth: boolean;
}

export interface UserData {
  email: string;
  password: string;
}

export enum UserActionTypes {
  ADD_USER_INFO = "ADD_USER_INFO",
  REMOVE_USER_INFO = "REMOVE_USER_INFO",
}

export interface AddUserAction {
  type: UserActionTypes.ADD_USER_INFO;
  payload: UserData;
}
export interface RemoveUserAction {
  type: UserActionTypes.REMOVE_USER_INFO;
  payload: null;
}

export type UserAction = AddUserAction | RemoveUserAction;
