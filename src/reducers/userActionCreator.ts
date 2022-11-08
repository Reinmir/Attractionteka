import { AddUserAction, UserActionTypes, UserData } from "src/types/User";

export const UserActionCreators = {
  setUserData: (payload: UserData): AddUserAction => {
    return {
      type: UserActionTypes.ADD_USER_INFO,
      payload,
    };
  },
};
