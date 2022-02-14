import {
	FetchRobotsFailure,
	FetchRobotsSuccess,
	FETCH_ROBOTS,
} from './robots-actions';
import { robotsInitialState, robotsReducer } from './robots-reducers';

describe('robotsReducer', () => {
	it('should return the initial state', () => {
		const result = robotsReducer(undefined, {});
		const expected = robotsInitialState;

		expect(result).toEqual(expected);
	});

	it('should handle FETCH_ROBOTS', () => {
		const result = robotsReducer(robotsInitialState, { type: FETCH_ROBOTS });
		const expected = {
			...robotsInitialState,
			isFetching: true,
		};

		expect(result).toEqual(expected);
	});

	it('should handle FETCH_ROBOTS_SUCCESS', () => {
		const action = FetchRobotsSuccess([
			{
				firstname: 'robo',
				email: 'robo@cat.purr',
			},
		]);
		const result = robotsReducer(robotsInitialState, action);
		const expected = {
			...robotsInitialState,
			data: [
				{
					firstname: 'robo',
					email: 'robo@cat.purr',
				},
			],
			isFetching: false,
		};

		expect(result).toEqual(expected);
	});

	it('should handle FETCH_ROBOTS_FAILURE', () => {
		const action = FetchRobotsFailure('Oups!');
		const result = robotsReducer(robotsInitialState, action);
		const expected = {
			...robotsInitialState,
			error: 'Oups!',
		};

		expect(result).toEqual(expected);
	});
});
