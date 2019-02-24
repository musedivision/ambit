import {randomYear} from '../containers/App';

const scopeAction = action => `people/${action}`;
// actions
const GET_PEOPLE = scopeAction('GET_PEOPLE');

// action creators
export const getPeopleAction = filter => ({
  type: GET_PEOPLE,
  filter,
});

const initialState = {
  people: [],
};

const getPeople = async filter => {
  try {
    const res = await fetch('https://localhost:6969/');
    return res.docs;
  } catch (e) {
    console.log('e.message: ', e.message);
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      getPeople(action.filter).then(docs => {
        return {
          ...state,
          people: docs,
        };
      });
    default:
      return state;
  }
};
