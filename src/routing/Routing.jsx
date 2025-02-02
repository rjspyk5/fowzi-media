import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/Home/Home";
import { NotFound } from "../components/NotFound/NotFound";


export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
