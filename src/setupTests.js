// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

Enzyme.configure({ adapter: new Adapter() });

export const mockStore = configureMockStore([thunkMiddleware]);
