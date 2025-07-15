import {RouterProvider, createBrowserRouter} from "react-router-dom";
import "./index.css";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import GifProvider from "./context/gif-context";
import SearchPage from "./pages/Search";
import Category from "./pages/Category";
import GifPage from "./pages/single-gif";
import Favorites from "./pages/Favorites";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <SearchPage />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

const App = () => {
  return (
    <GifProvider>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </GifProvider>
  );
};

export default App;
