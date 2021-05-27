import * as Types from "../../Types/ActionType";
import * as Services from "../../../Services";
import * as CartAction from "../Cart";
import { accessToken, user_login } from "../../../Configuration";

import { CreateAction } from "../CreateAction";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const notify = (notify) => {
  switch (notify) {
    case "LOGIN_SUCCESS": {
      return toast.success("Đăng nhập thành công!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500,
        pauseOnHover: false,
      });
    }

    case "LOGIN_FAILED": {
      return toast.error("Đăng nhập thất bại!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500,
        pauseOnHover: false,
      });
    }

    case "OTP_CODE": {
      return toast.info("Mã OTP đã gửi về email của bạn!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500,
        pauseOnHover: false,
      });
    }

    case "REGISTER_SUCCESS": {
      return toast.success("Đăng nhập thành công!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500,
        pauseOnHover: false,
      });
    }

    case "REGISTER_FAILED": {
      return toast.error("Đăng ký thất bại!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500,
        pauseOnHover: false,
      });
    }
    case "LOGIN_AFTER_REGISTER": {
      return toast.info("Vui lòng đăng nhập để ghi nhớ tài khoản!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500,
        pauseOnHover: false,
      });
    }
    case "ORDER_SUCCESSFUL": {
      return toast.success("Đơn hàng của bạn đã được đặt thành công!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
        pauseOnHover: false,
      });
    }
    case "FORGET_PASSWORD": {
      return toast.success("Vui lòng nhập lại mật khẩu mới của bạn!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
        pauseOnHover: false,
      });
    }
  }
};

const redirect = () => {
  document.getElementById("go-back").click();
};

const resetForm = () => {
  document.getElementById("btn-reset").click();
};

export const actionCheckoutRequest = (values) => {
  return (dispatch) => {
    return Services.createOrder(values)
      .then((result) => {
        dispatch(CreateAction(Types.CHECKOUT, result.data));
        notify("ORDER_SUCCESSFUL");
        setTimeout(() => {
          redirect();
        }, 1200);
        return dispatch(
          CartAction.actionFetchProductInCartByUserID(
            JSON.parse(localStorage.getItem(user_login)).id
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actionFetchOrderByUserID = (userID) => {
  return (dispatch) => {
    return Services.fetchOrderByUserID(userID)
      .then((result) => {
        dispatch(CreateAction(Types.FETCH_ORDER, result.data));
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

        notify("LOGIN_SUCCESS");
        setTimeout(() => {
          redirect();
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        resetForm();
        notify("LOGIN_FAILED");
      });
  };
};

export const actionRegisterRequest = (values) => {
  return (dispatch) => {
    return Services.register(values)
      .then((result) => {
        dispatch(CreateAction(Types.REGISTER, result.data));
        notify("OTP_CODE");
        setTimeout(() => {
          redirect();
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        resetForm();
        notify("REGISTER_FAILED");
      });
  };
};

export const actionConfirmOTPRequest = (values) => {
  console.log(values);
  return (dispatch) => {
    return Services.confirmOTP(values)
      .then((result) => {
        dispatch(CreateAction(Types.CONFIRM_OTP, result.data));
        notify("REGISTER_SUCCESS");

        setTimeout(() => {
          notify("LOGIN_AFTER_REGISTER");
        }, 1500);

        setTimeout(() => {
          redirect();
        }, 3500);
      })
      .catch((err) => {
        resetForm();
        notify("REGISTER_FAILED");
      });
  };
};

// Forget password
export const actionCheckEmailRequest = (email) => {
  return (dispatch) => {
    return Services.checkEmail(email)
      .then((result) => {
        dispatch(CreateAction(Types.FORGOT_PASSWORD, result.data));
        notify("FORGET_PASSWORD");
        setTimeout(() => {
          redirect();
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
        resetForm();
        notify("REGISTER_FAILED");
      });
  };
};
export const actionResetPasswordRequest = (email) => {
  return (dispatch) => {
    return Services.resetPassword(email)
      .then((result) => {
        dispatch(CreateAction(Types.RESET_PASSWORD, result.data));
        notify("LOGIN_SUCCESS");
        setTimeout(() => {
          redirect();
        }, 2500);
        resetForm();
      })
      .catch((err) => {
        console.log(err);
        resetForm();
        notify("LOGIN_AFTER_REGISTER");
      });
  };
};
