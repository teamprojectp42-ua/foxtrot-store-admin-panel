import { NavLink } from 'react-router-dom';
import './ui/Sidebar.css';

export default function Sidebar() {
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
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/products" className="nav-link link-dark">
                        CRM
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/categories" className="nav-link link-dark">
                        
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/orders" className="nav-link link-dark">
                        Заказы
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/users" className="nav-link link-dark">
                        Пользователи
                    </NavLink>
                </li>

            </ul>

            <hr />

            <div>
                <button className="btn btn-outline-secondary w-100">
                    Выйти
                </button>
            </div>
        </div>
    </>
}