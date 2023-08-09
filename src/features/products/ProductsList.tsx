import { useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
	selectFavoriteProduct,
	selectProducts,
	selectToggle,
} from './selectors';
import {
	changeToggleStatus,
	chooseFavoriteProduct,
	deleteProduct,
	loadProducts,
} from './productsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export default function ProductsList(): JSX.Element {
	const products = useAppSelector(selectProducts);
	const toggle = useAppSelector(selectToggle);
	const favoriteProduct = useAppSelector(selectFavoriteProduct);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(loadProducts());
	}, [dispatch]);
	const handleDelete = (id: number): void => {
		dispatch(deleteProduct(id)); // проверьте импорт не из api, a Slice
	};
	return (
		<div>
			<h1>Products List</h1>
			<h2>Favorite Product</h2>
			{!favoriteProduct && <p>товар не выбран</p>}
			<p>
				{favoriteProduct?.title} {favoriteProduct?.description}
			</p>
			<div
				style={
					toggle ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
				}
			>
				TOGGLE STATUS
			</div>
			<button type="button" onClick={() => dispatch(changeToggleStatus())}>
				Change Toggle Status
			</button>
			<h2>All Products</h2>
			{products.map((product) => (
				<li key={String(product.id)}>
					{product.title} {product.price}
					<FavoriteIcon
						onClick={() => dispatch(chooseFavoriteProduct(product))}
					/>
					<button type="button" onClick={() => handleDelete(product.id)}>
						Удалить
					</button>
				</li>
			))}
		</div>
	);
}
