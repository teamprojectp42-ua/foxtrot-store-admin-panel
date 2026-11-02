export default interface IAppContext{
    locale:Record<string, string>,
    switchLocale(locale:Record<string, string>): void,
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}