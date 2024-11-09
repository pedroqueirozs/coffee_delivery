import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { OrderConfirmed } from "./pages/orderConfirmed";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CartProvider } from "./context/CartContext";

export function Router() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/orderConfirmed" element={<OrderConfirmed />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}
