import Product from './types/Product';
import ProductDto from './types/ProductDto';

// GET
// eslint-disable-next-line import/prefer-default-export
export async function getAll(): Promise<Product[]> {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}

// DELETE - явно указали
export async function deleteProduct(id: number): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE'
  });
  return res.json();
}

// POST - create new entity
export async function createProduct(product: ProductDto): Promise<Product> {
  const res = await fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    // body: JSON.stringify(product) // сокращенная запись при условии совпадения ключей
    body: JSON.stringify(
      {
          title: product.title,
          price: product.price,
          description: product.description,
          image: product.image,
          category: product.category
      })
  });
  // return res.json(); // вариант когда сервер присылает назад объект целиком
  const { id } = await res.json(); // вариант когда сервер присылает только id назад
  return { ...product, id };
}
