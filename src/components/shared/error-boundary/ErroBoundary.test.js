import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary Component', () => {
	it('should render ErrorBoundary', () => {
		expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
	});
});
