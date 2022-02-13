import { shallow } from 'enzyme';
import Card from './Card';

describe('Card Component', () => {
	const mockRobot = {
		fullname: 'Miaw Bot',
	};
	it('should render Card', () => {
		expect(shallow(<Card robot={mockRobot} />)).toMatchSnapshot();
	});
});
