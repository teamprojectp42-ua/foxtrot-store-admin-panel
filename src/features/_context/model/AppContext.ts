import { createContext } from "react";
import type IAppContext from "./IAppContext";
import Locale_enUS from "../../../shared/L10n/Locale_en-US";

const AppContext = createContext<IAppContext>({
    locale: Locale_enUS,
    switchLocale: () => {},
    loading: false,
    setLoading: () => {},
})

export default AppContext;