import React from 'react';
import MainPage from './MainPage';
import { shallow } from 'enzyme';

describe('MainPage', () => {
	let wrapper;
	const robots = [
		{
			fullname: 'Robo Cat',
		},
		{
			fullname: 'Miaw Bot',
		},
	];
	beforeEach(() => {
		const mockProps = {
			fetchUsers: jest.fn(),
			data: [],
			searchTerm: '',
			isFetching: false,
			error: null,
		};
		wrapper = shallow(<MainPage {...mockProps} />);
	});

	it('should render MainPage', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('filterRobots', () => {
		it('return empty array', () => {
			const result = wrapper.instance().filterRobots();

			expect(result).toStrictEqual([]);
		});

		it('filters return array of length 1', () => {
			const mockProps = {
				fetchUsers: jest.fn(),
				data: robots,
				searchTerm: 'miaw',
				isFetching: false,
				error: null,
			};

			const expected = [
				{
					fullname: 'Miaw Bot',
				},
			];

			wrapper = shallow(<MainPage {...mockProps} />);
			const result = wrapper.instance().filterRobots();

			expect(result).toStrictEqual(expected);
		});

		it('filters return array of length 2', () => {
			const mockProps = {
				fetchUsers: jest.fn(),
				data: robots,
				searchTerm: 'bo',
				isFetching: false,
				error: null,
			};

			wrapper = shallow(<MainPage {...mockProps} />);
			const result = wrapper.instance().filterRobots();

			expect(result).toStrictEqual(robots);
		});

		it('filters return an empty array when no results was found', () => {
			const mockProps = {
				fetchUsers: jest.fn(),
				data: robots,
				searchTerm: 'meh',
				isFetching: false,
				error: null,
			};

			wrapper = shallow(<MainPage {...mockProps} />);
			const result = wrapper.instance().filterRobots();

			expect(result).toStrictEqual([]);
		});
	});

	describe('dataToShow', () => {
		it('should, if fetching, show loading message', () => {
			const loadingMessage = 'Loading...';
			const mockProps = {
				fetchUsers: jest.fn(),
				data: [],
				searchTerm: '',
				isFetching: true,
				error: null,
			};
			wrapper = shallow(<MainPage {...mockProps} />);
			const spy = jest.spyOn(wrapper.instance(), 'showMessage');

			wrapper.instance().showRobots();
			expect(spy).toHaveBeenCalledWith(loadingMessage);
		});

		it('should show No robots was found', () => {
			const notFound = 'No robot was found';
			const mockProps = {
				fetchUsers: jest.fn(),
				data: [],
				searchTerm: '',
				isFetching: false,
				error: null,
			};
			wrapper = shallow(<MainPage {...mockProps} />);
			const spy = jest.spyOn(wrapper.instance(), 'showMessage');

			wrapper.instance().showRobots();
			expect(spy).toHaveBeenCalledWith(notFound);
		});

		it('shoud show robots', () => {
			const mockProps = {
				fetchUsers: jest.fn(),
				data: robots,
				searchTerm: '',
				isFetching: false,
				error: null,
			};
			wrapper = shallow(<MainPage {...mockProps} />);
			const spy = jest.spyOn(wrapper.instance(), 'showScroll');

			wrapper.instance().showRobots();
			expect(spy).not.toHaveBeenCalled();
		});
	});

	describe('showMessage', () => {
		it('render loading message', () => {
			const loadingMessage = 'Loading...';
			const mockProps = {
				fetchUsers: jest.fn(),
				data: robots,
				searchTerm: '',
				isFetching: true,
				error: null,
			};

			wrapper = shallow(<MainPage {...mockProps} />);
			const result = wrapper.find('#message').text();

			expect(result).toBe(loadingMessage);
		});

		it('render no robot message', () => {
			const notFound = 'No robot was found';
			const mockProps = {
				fetchUsers: jest.fn(),
				data: [],
				searchTerm: '',
				isFetching: false,
				error: null,
			};

			wrapper = shallow(<MainPage {...mockProps} />);
			const result = wrapper.find('#message').text();

			expect(result).toBe(notFound);
		});

		it('render no robot message', () => {
			const errorMessage =
				'Something went wrong! Please try again later or contact the developer';
			const mockProps = {
				fetchUsers: jest.fn(),
				data: [],
				searchTerm: '',
				isFetching: false,
				error: {},
			};

			wrapper = shallow(<MainPage {...mockProps} />);
			const result = wrapper.find('#message').text();

			expect(result).toBe(errorMessage);
		});
	});
});
