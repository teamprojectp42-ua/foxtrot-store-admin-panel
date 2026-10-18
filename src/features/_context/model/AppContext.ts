import { createContext } from "react";
import type IAppContext from "./IAppContext";
import Locale_ukUA from "../../../shared/l10n/Locale_uk-UA";

const AppContext = createContext<IAppContext>({
    locale: Locale_ukUA,
})