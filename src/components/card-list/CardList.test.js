import { shallow } from 'enzyme';
import CardList from './CardList';

describe('CardList Component', () => {
	const mockRobots = [
		{
			id: 1,
			fullname: 'Robo Cat',
		},
		{
			id: 2,
			fullname: 'Miaw Bot',
		},
	];
	it('should render CardList', () => {
		expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
	});
});
