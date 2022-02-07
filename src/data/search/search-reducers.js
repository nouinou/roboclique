const { SEARCH_ROBOTS } = require('./search-actions');

const initialSearchState = {
	searchTerm: '',
};

export const searchReducer = (state = initialSearchState, action = {}) => {
	if (action.type === SEARCH_ROBOTS) {
		return {
			searchTerm: action.payload,
		};
	} else {
		return state;
	}
};
