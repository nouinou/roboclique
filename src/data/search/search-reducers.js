const { SEARCH_ROBOTS } = require('./search-actions');

export const searchInitialState = {
	searchTerm: '',
};

export const searchReducer = (state = searchInitialState, action = {}) => {
	if (action.type === SEARCH_ROBOTS) {
		return {
			searchTerm: action.payload,
		};
	} else {
		return state;
	}
};
