
import { useContext, useState } from 'react';
import AppContext from '../../features/_context/model/AppContext';
import './ui/Product.css';

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Lenovo IdeaPad 3',
        category: 'Laptops',
        price: 22999,
        stock: 15,
    },
    {
        id: 2,
        name: 'Samsung Galaxy A54',
        category: 'Smartphones',
        price: 14999,
        stock: 32,
    },
    {
        id: 3,
        name: 'JBL Tune 520BT',
        category: 'Audio',
        price: 3499,
        stock: 24,
    },
    {
        id: 4,
        name: 'Samsung 43" TV',
        category: 'Televisions',
        price: 12999,
        stock: 10,
    },
    {
        id: 5,
        name: 'Bosch Washing Machine',
        category: 'Home appliances',
        price: 18999,
        stock: 7,
    },
];

export default function Products() {
    const { locale } = useContext(AppContext);
    const [search, setSearch] = useState('');

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="products-page">

            <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                    <h1 className="products-title">
                        {locale.productsTitle}
                    </h1>

                    <p className="products-description">
                        {locale.productsDescription}
                    </p>
                </div>

                <button className="btn btn-warning text-white">
                    <i className="bi bi-plus-lg me-2"></i>
                    {locale.addProduct}
                </button>
            </div>

            <div className="input-group mb-3 products-search">
                <span className="input-group-text bg-white">
                    <i className="bi bi-search"></i>
                </span>

                <input
                    type="text"
                    className="form-control"
                    placeholder={locale.searchProduct}
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </div>

            <div className="table-responsive products-table-wrapper">
                <table className="table align-middle mb-0">
                    <thead>
                        <tr>
                            <th>{locale.productId}</th>
                            <th>{locale.productImage}</th>
                            <th>{locale.productName}</th>
                            <th>{locale.productCategory}</th>
                            <th>{locale.productPrice}</th>
                            <th>{locale.productStock}</th>
                            <th>{locale.productActions}</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredProducts.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>

                                <td>
                                    <div className="product-image-placeholder">
                                        <i className="bi bi-image"></i>
                                    </div>
                                </td>

                                <td className="fw-medium">
                                    {product.name}
                                </td>

                                <td>{product.category}</td>

                                <td>
                                    {product.price.toLocaleString('uk-UA')}
                                </td>

                                <td>{product.stock}</td>

                                <td>
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-outline-primary btn-sm">
                                            <i className="bi bi-pencil me-1"></i>
                                            {locale.edit}
                                        </button>

                                        <button className="btn btn-outline-danger btn-sm">
                                            <i className="bi bi-trash me-1"></i>
                                            {locale.delete}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                        {filteredProducts.length === 0 && (
                            <tr>
                                <td colSpan={7} className="text-center py-4">
                                    No products found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="text-secondary small">
                    {locale.totalProducts}: {filteredProducts.length}
                </span>

                <div className="d-flex gap-2">
                    <button className="btn btn-outline-secondary btn-sm" disabled>
                        1
                    </button>
                </div>
            </div>

        </div>
    );
}
