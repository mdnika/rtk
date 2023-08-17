import { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { selectFiltered, selectToggle, selectFavoriteMakeupProduct } from './selectors';
import { changeToggleStatus, chooseFavoriteMakeupProduct, loadMakeupsByBrand } from './makeupSlice';
import styles from './MakeupsList.module.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
//import { deleteMakeupProduct } from './makeupSlice';

export default function MakeupsList(): JSX.Element {
	const makeups = useAppSelector(selectFiltered);
	const toggle = useAppSelector(selectToggle);
	const favoriteMakeupProduct = useAppSelector(selectFavoriteMakeupProduct);
	const dispatch = useAppDispatch();
	const [brand, setBrand] = useState<string>('');
	useEffect(() => {
		dispatch(loadMakeupsByBrand(brand));
	}, [dispatch, brand]);
	/*const handleDelete = {id: number}: void => {
		dispatch(deleteMakeupProduct(id));
	}*/

	return (
		<div className={styles.container}>
			<h2 className={styles.headerTitleFMP}>Your Favorite Makeup Product:</h2>
			{!favoriteMakeupProduct && <p className={styles.message}>Your Favorite Makeup product is not choose.</p>}
			<p className={styles.favoriteMakeupProduct}>
				<h4><b>{favoriteMakeupProduct?.name}</b></h4>
				{favoriteMakeupProduct?.description}
			</p>
			<h4 className={styles.heading}>Search Makeup Product</h4>
			<div className={styles.inputContainer}>
				<input
					className={styles.searchBrand}
					type="text"
					value={brand}
					onChange={(e) => setBrand(e.target.value)}
					placeholder="search by brand"
				/>
			</div>
			
			<h2 className={styles.title}>Makeups List:</h2>
			<ul className={styles.list}>
				{makeups &&
					makeups.map((makeup) => (
						<li key={String(makeup.id)} className={styles.makeup}>
							<b><h3>{makeup.name}</h3> {makeup.price} € </b><br />
							{makeup.description} <br />
							<FavoriteIcon onClick={() => dispatch(chooseFavoriteMakeupProduct(makeup))} />
							{/* <button type="button" onClick={() => handleDelete(makeup.id)}>
						Delete a MakeupProduct
			</button>*/}
						</li>
					))}
			</ul>
			<div style={toggle ? { backgroundColor: 'rgb(188, 175, 189)' } : { backgroundColor: 'red' }}>
				TOGGLE STATUS
			</div>
			<button type="button" onClick={() => dispatch(changeToggleStatus())}>
				Change Toggle Status
			</button>
		</div>
	);
}
