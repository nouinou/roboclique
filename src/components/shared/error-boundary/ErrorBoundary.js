import { Component } from 'react';

const ERROR_MESSAGE =
	'Something went wrong! Please try again later or contact the developer';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="flex flex-col min-h-content justify-center items-center">
					<div className="robo-text text-2xl sm:text-3xl text-red-500 max-w-lg">
						{ERROR_MESSAGE}
					</div>
				</div>
			);
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;
