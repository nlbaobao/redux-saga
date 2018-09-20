// import { combineReducers } from 'redux';
// import addReducer from './add';
// import reduceReducer from './reduce';

// actions types
export const ADD_NUM = 'ADD_NUM';
export const REDUCE_NUM = 'REDUCE_NUM';
export const ASYNC_ADD_NUM = 'ASYNC_ADD_NUM';

// action creators
export function addNum(num) {
	return { type: ADD_NUM, num }
}

export function reduceNum(num) {
	return { type: REDUCE_NUM, num }
}


// reducers
const initState = {
	num: 0
};

export default function(state = initState, action) {
    switch (action.type) {
         case ADD_NUM: 
          return {
              ...state,
              num: state.num + action.num
          }
        case REDUCE_NUM: 
          return {
              ...state,
              num: state.num - action.num
          }
        default: 
          return state;  
    }
        
}


// export default combineReducers({
//     addReducer,
//     reduceReducer
// })

