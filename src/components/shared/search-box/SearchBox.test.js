import { shallow } from 'enzyme';
import SearchBox, { prop } from './SearchBox';
describe('SearchBox Component', () => {
	const mockSearchChange = jest.fn();
	it('should render SearchBox', () => {
		expect(
			shallow(<SearchBox searchChange={mockSearchChange} />)
		).toMatchSnapshot();
	});

	it('should call searchChange', () => {
		const wrapper = shallow(<SearchBox searchChange={mockSearchChange} />);
		const spy = jest.spyOn(prop, 'searchChange');
		wrapper
			.find('input')
			.at(0)
			.simulate('change', { target: { value: 'robot' } });
		expect(spy).toBeCalled();
	});
});
