import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../pages/_layout/Layout";
import Dashboard from '../../pages/dashboard/Dashboard';
import Products from '../../pages/products/Products';
import Categories from '../../pages/categories/Categories';
import Orders from '../../pages/orders/Orders';
import Users from '../../pages/users/Users';
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="users" element={<Users />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}