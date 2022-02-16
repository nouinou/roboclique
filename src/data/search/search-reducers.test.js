import { SearchRobots } from './search-actions';
import { searchInitialState, searchReducer } from './search-reducers';

describe('searchReducer', () => {
	it('should handle SEARCH_ROBOTS', () => {
		const action = SearchRobots('robo');
		const result = searchReducer(searchInitialState, action);
		const expected = {
			searchTerm: action.payload,
		};

		expect(result).toEqual(expected);
	});
});
