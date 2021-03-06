import React, { Component } from 'react';
import CardList from './card-list/CardList';
import Header from './shared/header/Header';
import Scroll from './shared/scroll/Scroll';
import ErrorBoundary from './shared/error-boundary/ErrorBoundary';

class MainPage extends Component {
	componentDidMount = () => this.props.fetchUsers();

	showMessage = (message) => (
		<div className="flex flex-col min-h-content justify-center items-center">
			<div id="message" className="robo-text text-2xl text-white max-w-lg">
				{message}
			</div>
		</div>
	);

	showScroll = (robots) => (
		<Scroll>
			<ErrorBoundary>
				<CardList robots={robots} />
			</ErrorBoundary>
		</Scroll>
	);

	showRobots = (robots) =>
		this.props.isFetching
			? this.showMessage('Loading...')
			: robots && robots.length
			? this.showScroll(robots)
			: this.showMessage('No robot was found');

	filterRobots = () => {
		const { data, searchTerm } = this.props;
		return (
			data &&
			data.filter((robot) =>
				robot.fullname.toLowerCase().includes(searchTerm.toLowerCase())
			)
		);
	};

	render() {
		const { onSearchTermChanged, error } = this.props;
		const robots = this.filterRobots();

		return (
			<div className="App text-center">
				<Header searchTermChanged={onSearchTermChanged} />
				{error
					? this.showMessage(
							'Something went wrong! Please try again later or contact the developer'
					  )
					: this.showRobots(robots)}
			</div>
		);
	}
}

export default MainPage;
