/* eslint-disable no-unused-vars */
import React from 'react';
import {
  modifyXGridSize,
  modifyYGridSize,
  modifyStepSize,
} from '../actions/grid';
import { Store } from '../store';
import './Form.scss';

const Form = () => {
  const {
    state: { xGridSize, yGridSize, stepSize },
    dispatch,
  } = React.useContext(Store);
  return (
    <div className='container login-form'>
      <h3>BOARD CONFIGURATION</h3>
      <form onSubmit={() => console.log('submit')}>
        <label>X Grid Size</label>
        <input
          type='number'
          name='xGridSize'
          defaultValue={xGridSize}
          onChange={(e) => modifyXGridSize(dispatch, e.target.value)}
          placeholder='X Cells'
        />

        <label>Y Grid Size</label>
        <input
          type='number'
          name='yGridSize'
          defaultValue={yGridSize}
          onChange={(e) => modifyYGridSize(dispatch, e.target.value)}
          placeholder='Y Cells'
        />

        <label>Step Size</label>
        <input
          type='number'
          name='steps'
          defaultValue={stepSize}
          onChange={(e) => modifyStepSize(dispatch, parseInt(e.target.value))}
          placeholder='Nº of Steps'
        />

        <input className='login-submit' type='submit' />
      </form>
    </div>
  );
};

export default Form;
