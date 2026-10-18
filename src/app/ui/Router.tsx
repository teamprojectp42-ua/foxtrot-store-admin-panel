import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../pages/_layout/Layout";

export default function Router(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            
            </Route>
        </Routes>
    </BrowserRouter>
}