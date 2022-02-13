import { shallow } from 'enzyme';
import Scroll from './Scroll';

describe('Scroll Component', () => {
	it('should render Scroll', () => {
		expect(shallow(<Scroll />)).toMatchSnapshot();
	});
});
