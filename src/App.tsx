/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductsList from './features/products/ProductsList';
import ProductCreate from './features/products/ProductCreate';
import Layout from './layouts/Layout';
import Home from './components/Home/Home';
import PostsList from './features/posts/PostsList';
import Login from './features/auth/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedPoute';
import MakeupsList from './features/makeups/MakeupsList';
import Description from './components/description/Description';
// eslint-disable-next-line import/no-unresolved

function App(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="counter" element={<Counter />} />
				<Route path="create-product" element={<ProductCreate />} />
				<Route path="products" element={<ProductsList />} />
				<Route path="posts" element={<ProtectedRoute outlet={<PostsList />} />} />
				<Route path="login" element={<Login />} />
				<Route path="makeups" element={<MakeupsList />} />
				<Route path="description" element={<Description />} />
			</Route>
		</Routes>
	);
}

export default App;
