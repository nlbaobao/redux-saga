import * as actions from './index.js';
 
const initState = {
	reduce: 0
};

export default function(state = initState, action) {
    switch (action.type) {
        case actions.REDUCE_NUM: 
          return {
              ...state,
              reduce: state.reduce - action.num
          }
        default: 
          return state;  
    }
        
}
