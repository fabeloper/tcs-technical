export const modifyXGridSize = (dispatch, size) => {
  dispatch({ type: 'SET_X_GRID_SIZE', payload: size });
};

export const modifyYGridSize = (dispatch, size) => {
  dispatch({ type: 'SET_Y_GRID_SIZE', payload: size });
};

export const modifyStepSize = (dispatch, size) => {
  dispatch({ type: 'SET_STEP_SIZE', payload: size });
};
