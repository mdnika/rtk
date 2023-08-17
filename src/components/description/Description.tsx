import styles from './Description.module.css';

export default function Description(): JSX.Element {
	return (
		<div className={styles.descriptionCard}>
			<h3>
				<b className={styles.titleDescription}>Makeup:</b>
			</h3>
			<p className={styles.textDescription}>
				It helps you feel more confident. Makeup also allows you to cover skin concerns that may
				cause insecurity. While you don't have to wear makeup or use it to hide anything, many
				people prefer to keep blemishes and dark spots undercover—and makeup helps you to do that.
			</p>
		</div>
	);
}
