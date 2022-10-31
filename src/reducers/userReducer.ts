import { UserAction, UserActionTypes, UserState } from "src/types/User";

const initalState: UserState = {
  email: "",
  password: "",
};

export const UserReducer = (
  state = initalState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.ADD_USER_INFO:
      return {
        email: action.payload,
        password: action.payload,
      };

    default:
      return state;
  }
};
