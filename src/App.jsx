import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PriceingPage from "./pages/PriceingPage";

const App = () => {
 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <BrowserRouter
        basename="/ijdesignswebsite/"
        path="/"
        element={<MainLayout />}
      >
        <Route index element={<HomePage />} />
        <Route path="/pricing" element={<PriceingPage />} />
        <Route path="*" element={<NotFound />} />
      </BrowserRouter>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
