const scopeAction = action => `people/${action}`;
const filters = ['everyone', 'male', 'female', 'over30', 'under30'];
// actions
const GET_PEOPLE = scopeAction('GET_PEOPLE');
const SET_FILTER = scopeAction('SET_FILTER');

// action creators thunks
export const getPeopleAction = filter => async dispatch => {
  const docs = await getPeople(filter);
  dispatch({
    type: GET_PEOPLE,
    docs,
  });
};

export const changeFilterAction = filter => (dispatch, getState) => {
  const {filter: currentFilter} = getState().people;
  if (currentFilter !== filter) {
    dispatch({
      type: SET_FILTER,
      filter,
    });
    getPeopleAction(filter)(dispatch);
  }
};

const initialState = {
  people: [],
  filter: filters[0],
};

const getPeople = async filter => {
  try {
    const res = await fetch(`/${filter}`);
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
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};
