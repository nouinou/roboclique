import {
	FetchRobots,
	FetchRobotsSuccess,
	FetchRobotsFailure,
	FETCH_ROBOTS,
	FETCH_ROBOTS_SUCCESS,
	FETCH_ROBOTS_FAILURE,
} from './robots-actions';
import * as robotsApi from './robots-api';
import { mockStore } from '../../setupTests';

describe('Robots Actions', () => {
	let store;

	beforeEach(() => {
		store = mockStore();
	});

	describe('FetchRobots', () => {
		it('should create an action to fetch robots', () => {
			expect.assertions(1);

			store.dispatch(FetchRobots());
			const action = store.getActions()[0];

			const expected = {
				type: FETCH_ROBOTS,
			};

			expect(action).toEqual(expected);
		});

		it('should call fetchUsers() ', () => {
			expect.assertions(1);

			const spy = jest.spyOn(robotsApi, 'fetchUsers');
			store.dispatch(FetchRobots());

			expect(spy).toBeCalled();
		});
	});

	describe('FetchRobotsSuccess', () => {
		it('should create an action upon success', () => {
			expect.assertions(1);

			store.dispatch(FetchRobotsSuccess([]));
			const action = store.getActions()[0];

			const expected = {
				type: FETCH_ROBOTS_SUCCESS,
				payload: [],
			};

			expect(action).toEqual(expected);
		});
	});

	describe('FetchRobotsFailure', () => {
		it('should create an action upon failure', () => {
			expect.assertions(1);

			store.dispatch(FetchRobotsFailure('Oups!'));
			const action = store.getActions()[0];

			const expected = {
				type: FETCH_ROBOTS_FAILURE,
				payload: 'Oups!',
			};

			expect(action).toEqual(expected);
		});
	});
});
