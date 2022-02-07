import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../../components/card-list/CardList';
import Header from '../../components/shared/header/Header';
import Scroll from '../../components/shared/scroll/Scroll';
import { SearchRobots } from '../../data/search/search-actions';
import { FetchRobots } from '../../data/robots/robots-actions';
import ErrorBoundary from '../../components/shared/error-boundary/ErrorBoundary';

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
	fetchUsers: () => dispatch(FetchRobots),
});

class App extends Component {
	componentDidMount = () => this.props.fetchUsers();

	showMessage = (message) => (
		<div className="flex flex-col min-h-content justify-center items-center">
			<div className="robo-text text-2xl text-white max-w-lg">{message}</div>
		</div>
	);

	dataToShow = (isFetching, users) => {
		return isFetching ? (
			this.showMessage('Loading...')
		) : users && users.length ? (
			<Scroll>
				<ErrorBoundary>
					<CardList users={users} />
				</ErrorBoundary>
			</Scroll>
		) : (
			this.showMessage('No robot was found')
		);
	};

	render() {
		const {
			searchTerm,
			onSearchTermChanged,
			data,
			isFetching,
			error,
		} = this.props;

		const users =
			data &&
			data.filter((user) =>
				user.fullname.toLowerCase().includes(searchTerm.toLowerCase())
			);

		return (
			<div className="App text-center">
				<Header searchTermChanged={onSearchTermChanged} />
				{error
					? this.showMessage(
							'Something went wrong! Please try again later or contact the developer'
					  )
					: this.dataToShow(isFetching, users)}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
