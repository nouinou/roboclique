import { PureComponent } from 'react';
import SearchBox from '../search-box/SearchBox';

class Header extends PureComponent {
	render() {
		return (
			<div className="header flex flex-col items-center justify-center w-screen min-h-20 bg-primary p-5 mb-6">
				<h1 className="robo-text text-5xl text-white md:text-7xl">
					Robo Clique
				</h1>
				<SearchBox searchChange={this.props.searchTermChanged} />
			</div>
		);
	}
}

export default Header;
