import { useState } from 'react';
import AppContext from '../../features/_context/model/AppContext';
import Locale_enUS from '../../shared/L10n/Locale_en-US';
import './App.css'
import Router from "./Router";

export default function App() {
  const [locale, setLocale] = useState(Locale_enUS);

  return (
    <AppContext.Provider
      value={{
        locale,
        switchLocale: setLocale,
        loading: false,
        setLoading: () => { },
      }}
    >
      <Router />
    </AppContext.Provider>
  );
}
