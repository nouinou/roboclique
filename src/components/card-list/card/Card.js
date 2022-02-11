const Card = (props) => {
	const { robot } = props;

	return (
		<div className="flex flex-col justify-center items-center w-100 bg-slate-100 m-0.5 p-10 cursor-pointer hover:animate-wiggle rounded-xl">
			<img
				className="robo-img text-center w-avatar"
				src={robot.image}
				height="192"
				width="192"
				alt="robot"
			/>
			<span className="robo-text text-primary text-2xl font-bold capitalize">
				{robot.fullname}
			</span>
			<a href={`mailto:${robot.email}`} className="text-md hover:text-primary">
				{robot.email}
			</a>
		</div>
	);
};

export default Card;
