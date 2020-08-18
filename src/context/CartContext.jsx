import React, { useState, useEffect } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
  const [globalTotal, setGlobalTotal] = useState(0);
  const [globalCart, setGlobalCart] = useState([
    {
      name: 'ASSORTED ITALIANO',
      imageLink:
        'https://cannoli-windsor.s3.amazonaws.com/cannoli-images/cannoli_3.jpg',
      description: 'Enjoy a taste of everything we have to offer',
      viewOptions: 0,
      smallIndQuantity: 0,
      mediumIndQuantity: 0,
      largeIndQuantity: 0,
      smallBoxQuantity: 0,
      mediumBoxQuantity: 0,
      largeBoxQuantity: 0,
    },
    {
      name: 'TRADITIONAL ALMOND',
      imageLink:
        'https://cannoli-windsor.s3.amazonaws.com/cannoli-images/cannoli_3.jpg',
      description: 'Roasted chopped almonds',
      viewOptions: 0,
      smallIndQuantity: 0,
      mediumIndQuantity: 0,
      largeIndQuantity: 0,
      smallBoxQuantity: 0,
      mediumBoxQuantity: 0,
      largeBoxQuantity: 0,
    },
    {
      name: 'CHOCOLATE CHIP',
      imageLink:
        'https://cannoli-windsor.s3.amazonaws.com/cannoli-images/rsz_1rsz_cannolis.jpg',
      description: 'Semi-sweet chocolate chips',
      viewOptions: 0,
      smallIndQuantity: 0,
      mediumIndQuantity: 0,
      largeIndQuantity: 0,
      smallBoxQuantity: 0,
      mediumBoxQuantity: 0,
      largeBoxQuantity: 0,
    },
    {
      name: 'TRADITIONAL CHERRY',
      imageLink:
        'https://cannoli-windsor.s3.amazonaws.com/cannoli-images/cannoli_2.jpg',
      description: 'Glacé cherries',
      viewOptions: 0,
      smallIndQuantity: 0,
      mediumIndQuantity: 0,
      largeIndQuantity: 0,
      smallBoxQuantity: 1,
      mediumBoxQuantity: 1,
      largeBoxQuantity: 1,
    },
    {
      name: 'CANELLA SICILIANA',
      imageLink:
        'https://cannoli-windsor.s3.amazonaws.com/cannoli-images/cannoli_3.jpg',
      description: 'Homemade cinnamon extract',
      viewOptions: 0,
      smallIndQuantity: 0,
      mediumIndQuantity: 0,
      largeIndQuantity: 0,
      smallBoxQuantity: 0,
      mediumBoxQuantity: 0,
      largeBoxQuantity: 0,
    },
    {
      name: 'VANILLA SUGAR',
      imageLink:
        'https://cannoli-windsor.s3.amazonaws.com/cannoli-images/cannoli_3.jpg',
      description: 'Homemade vanilla sugar',
      viewOptions: 0,
      smallIndQuantity: 0,
      mediumIndQuantity: 0,
      largeIndQuantity: 0,
      smallBoxQuantity: 1,
      mediumBoxQuantity: 1,
      largeBoxQuantity: 1,
    },
  ]);

  const totalQuantity = () => {
    let total = 0;
    globalCart.forEach((element) => {
      total += element.smallIndQuantity;
      total += element.mediumIndQuantity;
      total += element.largeIndQuantity;
      total += element.smallBoxQuantity * 6;
      total += element.mediumBoxQuantity * 4;
      total += element.largeBoxQuantity * 2;
    });
    setGlobalTotal(total);
  };
  useEffect(() => {
    totalQuantity();
  }, [globalCart]);
  return (
    <CartContext.Provider value={[globalCart, setGlobalCart, globalTotal]}>
      {props.children}
    </CartContext.Provider>
  );
};
