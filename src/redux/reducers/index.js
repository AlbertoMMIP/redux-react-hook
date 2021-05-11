import { SUCCESS_GET_TACO, TOGGLE_THEME } from '../actions/types';
const defaultState = {
  working: true,
  taco: {},
  loadingTaco: true,
  theme: 'LIGHT'
}
// Reducers solo es la siguiente función pura
// Que se encarga de establecer o modificar el estado general
// Dependiendo de los indicadores que se mandan a ejecutar
function index (state = defaultState, action) {
  switch (action.type) {
    case SUCCESS_GET_TACO:
      return {
        ...state,
        taco: action.payload,
        loadingTaco: false
      }
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'LIGHT' ? 'DARK' : 'LIGHT'
      }
    default:
      return state
  }
}

export default index;