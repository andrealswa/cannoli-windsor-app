import React, { useContext } from 'react';
import axios from 'axios';

import { Elements } from '@stripe/react-stripe-js'; // Must wrap in here
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from './CheckoutForm';
import { CartContext } from '../../context/CartContext';

import './Page.css';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

export const Page = (props) => {
  const [globalCart, setGlobalCart, globalTotal] = useContext(CartContext);

  const totalSum = () => {
    let totalSmall = 0;
    let totalMed = 0;
    let totalLarge = 0;
    globalCart.forEach((element) => {
      totalSmall += element.smallIndQuantity;
      totalMed += element.mediumIndQuantity;
      totalLarge += element.largeIndQuantity;
      totalSmall += element.smallBoxQuantity * 6;
      totalMed += element.mediumBoxQuantity * 4;
      totalLarge += element.largeBoxQuantity * 2;
    });
    return [totalSmall, totalMed, totalLarge];
  };

  return (
    <div className="background-style">
      <div style={{ height: '300px' }}></div>
      <div className="invoice">
        <div className="invoice-grid">
          <div className="invoice-title">Here's your receipt!</div>
          <div className="label-container">
            <label className="size-label"></label>
            <label className="cannoli-label amount">Quantity</label>{' '}
            <label className="price-label price">Price</label>
          </div>
          {globalCart.map((item, index) => {
            if (
              item.smallIndQuantity +
                item.mediumIndQuantity +
                item.largeIndQuantity +
                item.smallBoxQuantity +
                item.mediumBoxQuantity +
                item.largeBoxQuantity !==
              0
            ) {
              const styleToggle = (quantityInd, quantityBox) => {
                if (quantityInd === 0 && quantityBox === 0) {
                  return { display: 'none' };
                } else {
                  return {};
                }
              };
              return (
                <div key={index} className="container-invoice">
                  <div className="invoice-item-name">{item.name}</div>
                  <div className="invoice-item-quantity">
                    <div
                      className="label-container"
                      style={styleToggle(
                        item.smallIndQuantity,
                        item.smallBoxQuantity
                      )}
                    >
                      <label className="size-label">Small</label>{' '}
                      <label className="cannoli-label">
                        {item.smallIndQuantity + item.smallBoxQuantity * 6}{' '}
                        {/* <label className="price-style">x $2.50</label> */}
                      </label>
                      <label className="price-label">
                        $
                        {Math.round(
                          ((item.smallIndQuantity + item.smallBoxQuantity * 6) *
                            2.5 +
                            Number.EPSILON) *
                            100
                        ) / 100}
                      </label>
                    </div>

                    <div
                      className="label-container"
                      style={styleToggle(
                        item.mediumIndQuantity,
                        item.mediumBoxQuantity
                      )}
                    >
                      <label className="size-label">Medium:</label>
                      <label className="cannoli-label">
                        {item.mediumIndQuantity + item.mediumBoxQuantity * 4}
                      </label>
                      <label className="price-label">
                        $
                        {Math.round(
                          ((item.mediumIndQuantity +
                            item.mediumBoxQuantity * 4) *
                            3.5 +
                            Number.EPSILON) *
                            100
                        ) / 100}
                      </label>
                    </div>
                    <div
                      className="label-container"
                      style={styleToggle(
                        item.largeIndQuantity,
                        item.largeBoxQuantity
                      )}
                    >
                      <label className="size-label">Large: </label>
                      <label className="cannoli-label">
                        {item.largeIndQuantity + item.largeBoxQuantity * 2}
                      </label>
                      <label className="price-label">
                        $
                        {(item.largeIndQuantity + item.largeBoxQuantity * 2) *
                          5}
                      </label>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          <div className="invoice-total label-container">
            <label className="total-label">Total </label>
            <label className="total-quant-label">
              {totalSum()[0] + totalSum()[1] + totalSum()[2]}{' '}
            </label>

            <label className="price-label">
              $
              {Math.round(
                (totalSum()[0] * 2.5 +
                  totalSum()[1] * 3.5 +
                  totalSum()[2] * 5 +
                  Number.EPSILON) *
                  100
              ) / 100}
            </label>
          </div>
        </div>
      </div>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

// Phone number
// verification code 4 digits
// email
// first name
// last name
// autocomplete delivery address

// Highlight item in green with the number of that item to be delivered.

// Have a confirm order button
// Bake and Deliver now
// click on menu item and popup with a modal with the quantity of the item you want.
// Have option of writing a special note into the order system.
