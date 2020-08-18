import React from 'react';
import styles from './PickupOrDelivery.module.css';
import { connect } from 'react-redux'

const setPickup = () => {

}

const setDelivery = () => {

}

const PickupOrDeliveryUnconnected = (props) => {
  console.log(props.pickupOrDelivery)
  return (
    <div className={styles.flexContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Freshly made Cannolis</h2>
        <h4 className={styles.subtitle}>
          Pickup from us or we can deliver right to you
        </h4>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.pickup} onClick={setPickup}>Pickup</button>
        <button className={styles.delivery} onClick={setDelivery}>Delivery</button>
      </div>
      {/* {props.pickupOrDelivery.pickupOrDelivery} */}
    </div>
  );
};

const PickupOrDelivery = connect(state => {
  return {
    pickupOrDelivery: state.pickupOrDelivery
  }
})(PickupOrDeliveryUnconnected);

export { PickupOrDelivery }