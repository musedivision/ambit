import { randomYear } from '../containers/App'

const scopeAction = action => `pixels/${action}`
// actions
const UPDATE = scopeAction('UPDATE') 


// action creators
export const updatePixels = pixels => ({
  type: UPDATE,
  pixels
})


const initialState = {
  pixels: []
}

export default (state = initialState, action) => {
  switch(action.type){
    case UPDATE: 
      return {
        ...state,
        pixels: action.pixels
      }
    default: return state;
  }
}

