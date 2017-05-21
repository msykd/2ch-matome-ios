import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  isLoading: false,
  list: []
});

export default reducer = handleActions({
  'GET_ARTICLES': (state, action) => {
    return state.setIn(['isLoading'], true);
  },
  'RECEIVE_ARTICLES': (state, action) => {
      return state.setIn(['list'], action.payload).setIn(['isLoading'], false);
      // console.log(state.list);
      // const newState = state.list.set(action.payload);
      // return newState.isLoading.set(true);
    }
  }
  , initialState);