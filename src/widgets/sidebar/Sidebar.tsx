import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../features/_context/model/AppContext';
import './ui/Sidebar.css';

export default function Sidebar() {
    const { locale } = useContext(AppContext);
    return <>
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary h-100">
            <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
            >
                <span className="fs-4">Foxtrot Admin</span>
            </a>

            <hr />

            <ul className="nav nav-pills flex-column mb-auto">

                <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                        {locale.dashboard}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/products" className="nav-link link-dark">
                       {locale.products}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/categories" className="nav-link link-dark">
                        {locale.categories}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/orders" className="nav-link link-dark">
                       {locale.orders}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/users" className="nav-link link-dark">
                       {locale.users}
                    </NavLink>
                </li>

            </ul>

            <hr />

            <div>
                <button className="btn btn-outline-secondary w-100">
                    {locale.logout}
                </button>
            </div>
        </div>
    </>
}