import * as Types from "../../Types/ActionType";
import * as Services from "../../../Services";
import { accessToken, user_login } from "../../../Configuration";

import { CreateAction } from "../CreateAction";

const redirect = () => {
  // window.location.assign("/confirmOTP");
  document.getElementById("go-back").click();
};

export const actionCheckoutRequest = (values) => {
  return (dispatch) => {
    return Services.checkout(values)
      .then((result) => {
        console.log(result.data);
        dispatch(CreateAction(Types.CHECKOUT, result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actionLoginRequest = (values) => {
  return (dispatch) => {
    return Services.login(values)
      .then((result) => {
        dispatch(CreateAction(Types.LOGIN, result.data));

        localStorage.setItem(accessToken, result.data.accessToken);
        localStorage.setItem(user_login, JSON.stringify(result.data));
        redirect();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actionRegisterRequest = (values) => {
  return (dispatch) => {
    return Services.register(values)
      .then((result) => {
        dispatch(CreateAction(Types.REGISTER, result.data));
        localStorage.setItem("Register", JSON.stringify(values));
        redirect();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actionConfirmOTPRequest = (otp) => {
  return (dispatch) => {
    return Services.confirmOTP(otp)
      .then((result) => {
        console.log(result.data);
        dispatch(CreateAction(Types.CONFIRM_OTP, result.data));
        localStorage.removeItem("Register");
        redirect();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// Forget password
export const actionCheckEmailRequest = (email) => {
  return (dispatch) => {
    return Services.checkEmail(email)
      .then((result) => {
        console.log(result.data);
        dispatch(CreateAction(Types.FORGOT_PASSWORD, result.data));

        redirect();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actionResetPasswordRequest = (email) => {
  return (dispatch) => {
    return Services.resetPassword(email)
      .then((result) => {
        console.log(result.data);
        dispatch(CreateAction(Types.RESET_PASSWORD, result.data));

        redirect();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
