const SearchBox = ({ searchChange }) => {
	return (
		<div className="relative block mt-2">
			<span className="stroke-slate-400 absolute inset-y-0 left-0 flex items-center pl-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="slate-400 h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</span>
			<input
				className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-1 pl-9 pr-1 sm:py-2 sm:pl-9 sm:pr-3 shadow-sm focus:outline-none focus:border-slate-500 focus:ring-slate-500 focus:ring-1 text-sm md:text-md"
				placeholder="Search robots..."
				onChange={searchChange}
				type="search"
			/>
		</div>
	);
};

export default SearchBox;
