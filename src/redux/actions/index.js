import { GET_TACO, SUCCESS_GET_TACO, TOGGLE_THEME } from './types';

const getTaco = () => ({
  type: GET_TACO
})

// Los actions son instrucciones seguras 
// que indican que objeto se desea establecer en el estado 
// dependiendo el type que se establece.
const successGetTaco = (payload) => ({
  type: SUCCESS_GET_TACO,
  payload
})

export const toggleTheme = () => ({
  type: TOGGLE_THEME
})


// Para ejecutar una función como action 
// se necesita un middleware
// que cumpla la premisa de ser segura a la función
// Para eso usamos redux-thunk
export const fecthTaco = function(payload){
  return async function(dispatch){
    dispatch(getTaco());
    const response = await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true');
    const data = await response.json();
    dispatch(successGetTaco(data));
  }
}
