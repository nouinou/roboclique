module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			width: {
				avatar: '192px',
			},
			colors: {
				primary: '#3E4451',
				bg: '#282C34',
			},
			minWidth: {
				300: '300px',
			},
			minHeight: {
				20: '20vh',
				content: 'Calc(100vh - 20vh - 1.5em)',
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-1deg)' },
					'50%': { transform: 'rotate(1deg)' },
				},
			},
		},
	},
	plugins: [],
};
