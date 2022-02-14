import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../../components/MainPage';
import { SearchRobots } from '../../data/search/search-actions';
import { FetchRobots } from '../../data/robots/robots-actions';

const mapStateToProps = (state) => {
	const { robots } = state;
	return {
		searchTerm: state.search.searchTerm,
		data: robots.data,
		isFetching: robots.isFetching,
		error: robots.error,
	};
};

const mapDispatchToProps = (dispatch) => ({
	onSearchTermChanged: (event) => dispatch(SearchRobots(event.target.value)),
	fetchUsers: () => dispatch(FetchRobots()),
});

class App extends Component {
	render = () => <MainPage {...this.props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
