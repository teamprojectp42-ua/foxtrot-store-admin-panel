import './ui/Layout.css';
import Sidebar from '../../widgets/sidebar/Sidebar';
import Header from '../../widgets/header/Header';
import { Outlet } from 'react-router-dom';
export default function Layout() {
    return <>
        <div className="d-flex vh-100">

            {/* Левая часть */}
            <aside
                className="flex-shrink-0"
                style={{ width: '250px' }}
            >
                <Sidebar />
            </aside>

            {/* Правая часть */}
            <div className="d-flex flex-column flex-grow-1">

                <Header />

                <main className="p-4 overflow-auto">
                    <Outlet />
                </main>

            </div>

        </div>
    </>
}