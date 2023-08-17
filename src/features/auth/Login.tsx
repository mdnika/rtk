import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { login } from './authSlice';
import { useNavigate } from 'react-router-dom';

export default function Login(): JSX.Element {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	function handleLogin(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		dispatch(login({ username, password }));
		navigate('/'); // to new Page
	}
	return (
		<>
			<form onSubmit={handleLogin}>
				<input
					type="text"
					placeholder="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="text"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Login</button>
			</form>
		</>
	);
}
