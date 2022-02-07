import { fetchUsers } from './robots-api';

export const FETCH_ROBOTS = 'FETCH_ROBOTS';
export const FETCH_ROBOTS_SUCCESS = 'FETCH_ROBOTS_SUCCESS';
export const FETCH_ROBOTS_FAILURE = 'FETCH_ROBOTS_FAILURE';

export const FetchRobots = async (dispatch) => {
	dispatch({ type: FETCH_ROBOTS });

	try {
		const data = await fetchUsers();
		dispatch(FetchRobotsSuccess(data));
	} catch (error) {
		dispatch(FetchRobotsFailure(error));
	}
};

export const FetchRobotsSuccess = (payload) => ({
	type: FETCH_ROBOTS_SUCCESS,
	payload,
});

export const FetchRobotsFailure = (payload) => ({
	type: FETCH_ROBOTS_FAILURE,
	payload,
});
