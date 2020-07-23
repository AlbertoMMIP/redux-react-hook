import { SUCCESS_GET_TACO } from '../actions/types';
const defaultState = {
  working: true,
  taco: {},
  loadingTaco: true
}
// Reducers solo es la siguiente función pura
// Que se encarga de establecer o modificar el estado general
// Dependiendo de los indicadores que se mandan a ejecutar
export default (state = defaultState, action) => {
  switch (action.type) {
    case SUCCESS_GET_TACO:
      return {
        ...state,
        taco: action.payload,
        loadingTaco: false
      }
    default:
      return state
  }
}