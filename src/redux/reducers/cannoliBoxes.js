const cannoliBoxesDefaultState = {
  redMini: 0,
  redMedium: 0,
  redLarge: 0,
  //   blueMini: 0,
  //   blueMedium: 0,
  //   blueLarge: 0,
  //   greenMini: 0,
  //   greenMedium: 0,
  //   greenLarge: 0,
  //   orangeMini: 0,
  //   orangeMedium: 0,
  //   orangeLarge: 0,
};

export const cannoliBoxes = (state = cannoliBoxesDefaultState, action) => {
  switch (action.type) {
    case 'INCREMENT_RED_MINI':
      return {
        ...state,
        redMini: state.redMini + 1,
      };
    case 'DECREMENT_RED_MINI':
      return {
        ...state,
        redMini: state.redMini - 1,
      };
    case 'INCREMENT_RED_MEDIUM':
      return {
        ...state,
        redMedium: state.redMedium + 1,
      };
    case 'DECREMENT_RED_MEDIUM':
      return {
        ...state,
        redMedium: state.redMedium - 1,
      };
    case 'INCREMENT_RED_LARGE':
      return {
        ...state,
        redLarge: state.redLarge + 1,
      };
    case 'DECREMENT_RED_LARGE':
      return {
        ...state,
        redLarge: state.redLarge - 1,
      };

    default: {
      return state;
    }
  }
};
