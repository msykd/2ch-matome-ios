import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS([
]);

export default reducer = handleActions({
  'RECEIVE_ARTICLES': (state, action) => {
      return state.push(...action.payload);
    }
  }
  , initialState);