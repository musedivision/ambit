import {randomYear} from '../containers/App';

const scopeAction = action => `people/${action}`;
// actions
const GET_PEOPLE = scopeAction('GET_PEOPLE');

// action creators thunks
export const getPeopleAction = filter => async dispatch => {
  const docs = await getPeople(filter);
  dispatch({
    type: GET_PEOPLE,
    docs,
  });
};

const initialState = {
  people: [],
};

const getPeople = async filter => {
  try {
    const res = await fetch('http://localhost:6969/');
    return await res.json();
  } catch (e) {
    console.log('e.message: ', e.message);
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        people: action.docs,
      };
    default:
      return state;
  }
};
