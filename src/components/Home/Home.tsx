import styles from './Home.module.css';
import logo from '../image/logo.jpeg';
export default function Home(): JSX.Element {
	return (
		<div>
			<div className={styles.logo}>
				<img className={styles.logo} src={logo} alt="LOGO" />
			</div>
		</div>
	);
}
