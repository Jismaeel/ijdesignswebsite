import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PriceingPage from "./pages/PricingPage";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  return (
    <BrowserRouter basename="/ijdesignswebsite/">
      <Routes>
        <Route path="/"  element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/pricing" element={<PriceingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
