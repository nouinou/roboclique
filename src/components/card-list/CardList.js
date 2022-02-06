import { Component } from 'react';
import Card from './card/Card';

const CardList = ({ users }) => {
	const cards = users.map((user) => <Card key={user.id} user={user} />);

	return (
		<div className="m-5 grid gap-5 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-content-center">
			{cards}
		</div>
	);
};

export default CardList;
