const Card = (props) => {
	const { user } = props;

	return (
		<div className="flex flex-col justify-center items-center w-100 bg-slate-100 m-0.5 p-10 cursor-pointer hover:animate-wiggle rounded-xl">
			<img
				className="robo-img text-center w-avatar"
				src={user.image}
				alt="robot"
			/>
			<span className="robo-text text-primary text-2xl font-bold capitalize">
				{user.fullname}
			</span>
			<a href={`mailto:${user.email}`} className="text-md hover:text-primary">
				{user.email}
			</a>
		</div>
	);
};

export default Card;
