import { createStore, combineReducers } from 'redux';
import { cannoliBoxes } from '../reducers/cannoliBoxes';
import { cannoliIndividual } from '../reducers/cannoliIndividual';
import { pickupOrDelivery } from '../reducers/pickupOrDelivery';

const store = createStore(
  combineReducers({
    cannoliBoxes: cannoliBoxes,
    cannoliIndividual: cannoliIndividual,
    pickupOrDelivery: pickupOrDelivery
  })
);

export { store };
