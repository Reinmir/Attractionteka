import { UserAction, UserActionTypes, UserState } from "src/types/User";

const initalState: UserState = {
  user: null,
  isAuth: false,
};

export const UserReducer = (
  state = initalState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.ADD_USER_INFO:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };

    default:
      return state;
  }
};
