import { alertConstants as consts } from "../constants";

export function alertReducer(state = null, action: any) {
  switch (action.type) {
    case consts.SUCCESS:
      return {
        isSuccess: true,
        message: action.message,
      };
    case consts.ERROR:
      return {
        isError: true,
        message: action.message,
      };
    case consts.CLEAR:
      return {
        isSuccess: false,
        isError: false,
        message: null,
      };
    default:
      return state;
  }
}
