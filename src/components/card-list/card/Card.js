const Card = (props) => {
	const user = props.user;

	return (
		<div className="flex flex-col justify-center items-center w-100 bg-slate-100 m-0.5 p-10 rounded-xl">
			<img className="robo-img text-center w-avatar" src={user.image} />
			<span className="robo-text text-bg text-2xl font-bold capitalize">
				{user.fullname}
			</span>
			<span className="text-md">{user.email}</span>
		</div>
	);
};

export default Card;
