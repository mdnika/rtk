import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import styles from './Layout.module.css';
import logo from '../components/image/logo.jpeg';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Layout(): JSX.Element {
	return (
		<>
			<header>
				<div className={styles.logo}>
					<img className={styles.logoImg} src={logo} alt="LOGO" />
				</div>
			</header>
			<Navbar />
			<Outlet />
			<footer>
				<CopyrightIcon />
				Marina Danilov created this project. Unfortunately, she did not have time to finalize it.
			</footer>
		</>
	);
}
