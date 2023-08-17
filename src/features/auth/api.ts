import User from './types/User';

export async function login(username: string, password: string): Promise<User> {
	const res = await fetch('https://dummyjson.com/auth/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			username, //username: username
			password,
		}),
	});
	return res.json();
}
