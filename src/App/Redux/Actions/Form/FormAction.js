import * as Types from "../../Types/ActionType";

export const actionToggleFormRequest = () => {
  return {
    type: Types.TOGGLE_FORM,
  };
};

export const actionCloseFormRequest = () => {
  return {
    type: Types.CLOSE_FORM,
  };
};

export const actionOpenFormRequest = () => {
  return {
    type: Types.OPEN_FORM,
  };
};
