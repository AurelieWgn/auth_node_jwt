import {GET_USER_INFO} from './actions-types';

export const getUserInfo = (user)=>{
    return function(dispatch) {
        dispatch({
			type: GET_USER_INFO,
			payload: user
		});
    }
}