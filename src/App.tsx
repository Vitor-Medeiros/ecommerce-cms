import { Route, Routes } from "react-router-dom";
import { CategoryLayout } from "./cases/categories/components/category-layout";
import { BrandForm } from "./cases/brands/components/brand-form";
import { BrandLayout } from "./cases/brands/components/brand-layout";
import { ProductLayout } from "./cases/products/components/product-layout";
import { ProductForm } from "./cases/products/components/product-form";
import { OrderLayout } from "./cases/orders/components/order-layout";
import { OrderForm } from "./cases/orders/components/order-form";
import {ToastContainer} from 'react-toastify'; 
import { CategoryForm } from "./cases/categories/components/category-form";
function App() {
  return (
    <div className="wrapper">
      <main>
        <Routes>
          <Route path="/categories" element={<CategoryLayout />} />
          <Route path="new" element={<CategoryForm />} />
          <Route path=":id" element={<CategoryForm />} />

          <Route path="/brands" element={<BrandLayout />} />
          <Route path="new" element={<BrandForm />} />
          <Route path=":id" element={<BrandForm />} />

          <Route path="/products" element={<ProductLayout />} />
          <Route path="new" element={<ProductForm />} />
          <Route path=":id" element={<ProductForm />} />

          <Route path="/orders" element={<OrderLayout />} />
          <Route path="new" element={<OrderForm />} />
          <Route path=":id" element={<OrderForm />} />

        </Routes>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;