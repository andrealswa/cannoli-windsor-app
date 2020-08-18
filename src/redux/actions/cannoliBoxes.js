const incrementRed = (choice) => {
  if (choice === 'MINI') {
    return {
      type: 'INCREMENT_RED_MINI',
    };
  } else if (choice === 'MEDIUM') {
    return {
      type: 'INCREMENT_RED_MEDIUM',
    };
  } else if (choice === 'LARGE') {
    return {
      type: 'INCREMENT_RED_LARGE',
    };
  }
};

const decrementRed = (choice) => {
  return {
    type: 'DECREMENT_RED_MINI',
  };
};

export { incrementRed, decrementRed };
