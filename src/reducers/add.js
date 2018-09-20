import * as actions from './index.js';
 
const initState = {
	add: 0
};

export default function(state = initState, action) {
    switch (action.type) {
        case actions.ADD_NUM: 
          return {
              ...state,
              add: state.add + action.num
          }
        default: 
          return state;  
    }
        
}
