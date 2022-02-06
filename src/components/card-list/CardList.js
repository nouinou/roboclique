import { Component } from 'react';
import Card from './card/Card';

class CardList extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}

	componentDidMount = async () => {
		const data = await this.fetUsers();
		this.setState({ data });
	};

	fetUsers = async () => {
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

	render() {
		const cards = [...this.state.data].map((user) => (
			<Card key={user.id} user={user} />
		));

		return cards.length ? (
			<div className="m-5 grid gap-5 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-content-center">
				{cards}
			</div>
		) : (
			<div className="flex flex-col min-h-content justify-center">
				<span className="robo-text text-2xl text-white">loading...</span>
			</div>
		);
	}
}

export default CardList;
