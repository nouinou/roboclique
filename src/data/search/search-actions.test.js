import { mockStore } from '../../setupTests';
import { SearchRobots, SEARCH_ROBOTS } from './search-actions';

describe('SearchRobots', () => {
	let store;
	store = mockStore();

	it('should create an action upon search', () => {
		store.dispatch(SearchRobots('robo'));
		const action = store.getActions()[0];

		const expected = {
			type: SEARCH_ROBOTS,
			payload: 'robo',
		};

		expect(action).toEqual(expected);
	});
});
