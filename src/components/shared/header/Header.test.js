import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {
	const mockSearchTermChanged = jest.fn();

	it('should render Header', () => {
		expect(
			shallow(<Header searchTermChanged={mockSearchTermChanged} />)
		).toMatchSnapshot();
	});

	it('should call searchTermChanged', () => {
		const wrapper = mount(<Header searchTermChanged={mockSearchTermChanged} />);
		const spy = jest.spyOn(wrapper.instance().props, 'searchTermChanged');
		wrapper
			.find('input')
			.at(0)
			.simulate('change', { target: { value: 'robot' } });
		expect(spy).toBeCalled();
	});
});
