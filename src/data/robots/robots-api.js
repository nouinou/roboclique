const userApi = 'https://reqres.in/api/users?page=1&per_page=10';

const getRobotImage = (id) =>
	`https://robohash.org/${id}?set=set3&size=192x192`;

export const fetchUsers = async () => {
	const response = await (await fetch(userApi)).json();

	return response.data.map((user) => ({
		id: user.id,
		image: getRobotImage(user.id),
		fullname: `${user.first_name} ${user.last_name}`,
		email: user.email,
	}));
};
