import React, { Component } from 'react';
import CardList from '../../components/card-list/CardList';
import Header from '../../components/header/Header';
import Scroll from '../../components/scroll/Scroll';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			searchTerm: '',
		};
	}

	componentDidMount = async () => {
		const data = await this.fetchUsers();
		this.setState({ data });
	};

	fetchUsers = async () => {
		const response = await (
			await fetch('https://reqres.in/api/users?page=1&per_page=10')
		).json();
		return response.data.map((user) => ({
			id: user.id,
			image: `https://robohash.org/${user.id}?set=set3&size=192x192`,
			fullname: `${user.first_name} ${user.last_name}`,
			email: user.email,
		}));
	};

	onSearchTermChanged = (event) => {
		this.setState({
			searchTerm: event.target.value,
		});
	};

	dataToShow = (data, users) => {
		return data.length ? (
			<Scroll>
				<CardList users={users} />
			</Scroll>
		) : (
			<div className="flex flex-col min-h-content justify-center">
				<span className="robo-text text-2xl text-white">loading...</span>
			</div>
		);
	};

	render() {
		const { searchTerm, data } = this.state;
		const users = data.filter((user) =>
			user.fullname.toLowerCase().includes(searchTerm.toLowerCase())
		);

		return (
			<div className="App text-center">
				<Header searchTermChanged={this.onSearchTermChanged} />
				{this.dataToShow(data, users)}
			</div>
		);
	}
}

export default App;
