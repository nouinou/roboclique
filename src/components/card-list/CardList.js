import { Component } from 'react';
import Card from './card/Card';

class CardList extends Component {
	render() {
		const user = {
			id: '2',
			fullname: 'hamza nouinou',
			email: 'nouinouhamza@gmail.com',
			image: 'https://robohash.org/4?set=set3&size=192x192',
		};
		return (
			<div className="m-5 grid gap-5 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-content-center">
				<Card user={user} />
				<Card user={user} />
				<Card user={user} />
				<Card user={user} />
				<Card user={user} />
				<Card user={user} />
			</div>
		);
	}
}

export default CardList;
