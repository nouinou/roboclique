import React from 'react';
import CardList from '../../components/card-list/CardList';
import Header from '../../components/header/Header';
import Scroll from '../../components/scroll/Scroll';

function App() {
	return (
		<div className="App text-center">
			<Header />
			<Scroll>
				<CardList />
			</Scroll>
		</div>
	);
}

export default App;
