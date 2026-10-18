import './ui/Header.css';

export default function Header() {
    return <>
        <nav className="navbar bg-body-tertiary border-bottom">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Поиск"
                    />

                    <button
                        className="btn btn-outline-primary"
                        type="submit"
                    >
                        Найти
                    </button>
                </form>
                <div className="d-flex align-items-center gap-3">

                    <button className="btn btn-outline-secondary">
                        <i className="bi bi-moon"></i>
                    </button>

                    <button className="btn btn-outline-secondary">
                        <i className="bi bi-globe2"></i>
                    </button>

                    <button className="btn btn-outline-secondary position-relative">
                        <i className="bi bi-bell"></i>

                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            3
                        </span>
                    </button>

                    <button className="btn btn-outline-secondary">
                        <i className="bi bi-person-circle"></i>
                    </button>
                </div>
            </div>
        </nav>
    </>
}