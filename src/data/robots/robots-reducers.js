import {
	FETCH_ROBOTS,
	FETCH_ROBOTS_SUCCESS,
	FETCH_ROBOTS_FAILURE,
} from './robots-actions';

export const robotsInitialState = {
	isFetching: false,
	data: null,
	error: null,
};

export const robotsReducer = (state = robotsInitialState, action = {}) => {
	switch (action.type) {
		case FETCH_ROBOTS:
			return {
				...state,
				isFetching: true,
			};
		case FETCH_ROBOTS_SUCCESS:
			return {
				...state,
				isFetching: false,
				data: action.payload,
			};
		case FETCH_ROBOTS_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
