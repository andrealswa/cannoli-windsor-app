const defaultPickupOrDeliveryState = {
  pickupOrDelivery: 'PICKUP'
}

export const pickupOrDelivery = (state = defaultPickupOrDeliveryState, action) => {
  switch (action.type) {
    case 'PICKUP': {
      return {
        pickupOrDelivery: 'PICKUP'
      };
    }
    case 'DELIVERY': {
      return {
        pickUpDelivery: 'DELIVERY'
      }
    }
    default: {
      return state
    }
  }
};
