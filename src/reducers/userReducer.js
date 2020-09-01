import {GET_USER_INFO} from '../actions/actions-types';


const initialState = {
	user: null,
}

export default function UserReducer(state = initialState, action) {
     switch(action.type) {
     	
		case GET_USER_INFO:

			return {
				...state,
				user: action.payload
			}
		
		default: 
			return state;
	}

}