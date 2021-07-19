/* eslint-disable react/prop-types */
import React from 'react';
import {
  initialXGridSize,
  initialYGridSize,
  initialStepSize,
} from '../utils/constants';

export const Store = React.createContext();

const initialState = {
  xGridSize: initialXGridSize,
  yGridSize: initialYGridSize,
  stepSize: initialStepSize,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_X_GRID_SIZE':
      return {
        ...state,
        xGridSize: action.payload,
      };
    case 'SET_Y_GRID_SIZE':
      return {
        ...state,
        yGridSize: action.payload,
      };
    case 'SET_STEP_SIZE':
      return {
        ...state,
        stepSize: action.payload,
      };
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
