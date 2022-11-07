import { useAppDispatch } from "./useAppDispatch";
import { bindActionCreators } from "redux";
import { allActionCreators } from "src/actions/action-creator";

export const UseActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};
