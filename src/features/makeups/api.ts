import Makeup from './types/Makeup';

export async function getAll(): Promise<{ makeups: Makeup[] }> {
	const res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
	return res.json();
}

export async function getMakeupsByBrand(brand: string): Promise<Makeup[]> {
	const res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`);
	return res.json();
}

export async function getMakeupsByBrandAndProductType(
	brand: string,
	product_type: string
): Promise<{ makeups: Makeup[] }> {
	const res = await fetch(
		`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${product_type}`
	);
	return res.json();
}

/*export async function deleteMakeupProduct(id: number): Promise<Makeup> {
	const res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json/${id}`, {
		method: 'DELETE',
	});
	return res.json();
}*/
