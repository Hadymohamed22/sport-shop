import { Route, Routes, useLocation } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProductData from "./pages/ProductData";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ProductsPage from "./pages/ProductsPage";
import About from "./pages/About";

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product-details/:productId" element={<ProductData />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
