import {
  AddUserAction,
  RemoveUserAction,
  UserActionTypes,
  UserData,
} from "src/types/User";

export const UserActionCreators = {
  setUserData: (payload: UserData): AddUserAction => {
    return {
      type: UserActionTypes.ADD_USER_INFO,
      payload,
    };
  },
  removeUserData: (): RemoveUserAction => {
    return {
      type: UserActionTypes.REMOVE_USER_INFO,
      payload: null,
    };
  },
};
