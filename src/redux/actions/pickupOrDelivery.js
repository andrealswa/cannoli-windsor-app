const pickupOrDelivery = (deliveryOption) => {
  if (choice === 'PICKUP') {
    return {
      type: 'PICKUP',
    };
  }
  else if (choice === 'DELIVERY') {
    return {
      type: 'DELIVERY'
    }
  }
}

export { pickupOrDelivery }
