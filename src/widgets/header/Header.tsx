import './ui/Header.css';
import { useContext } from 'react';
import AppContext from '../../features/_context/model/AppContext';
import Locale_ukUA from '../../shared/L10n/Locale_uk-UA';
import Locale_enUS from '../../shared/L10n/Locale_en-US';
export default function Header() {
    const { locale, switchLocale } = useContext(AppContext);
    return <>
        <nav className="navbar bg-body-tertiary border-bottom">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder={locale.search}
                    />

                    <button
                        className="btn btn-outline-primary"
                        type="submit"
                    >
                        {locale.searchButton}
                    </button>
                </form>
                <div className="d-flex align-items-center gap-3">

                    <button className="btn btn-outline-secondary">
                        <i className="bi bi-moon"></i>
                    </button>

                    <button
                        className="btn btn-outline-secondary"
                        onClick={() =>
                            switchLocale(
                                locale.suffix === '_uk_UA'
                                    ? Locale_enUS
                                    : Locale_ukUA
                            )
                        }
                    >
                        <i className="bi bi-globe2"></i>
                        {' '}
                        {locale.languageButton}
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