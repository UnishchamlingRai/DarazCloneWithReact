import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./UI/Navbar/Navbar";
import Home from "./Page/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProductDetails from "./features/ProductDetails/ProductDetailsContainer/ProductDetailsContainer";
import Navbar from "./UI/Navbar/Navbar";
import ProductSearchSection from "./Page/ProductsSearch/ProductSearchSection";
import Login from "./features/Auth/Login/Login";
import SignUp from "./features/Auth/SignUp/SignUp";
import Carts from "./Page/Carts";
import CartsProvider from "./contexts/cartsContext";
// import ProductSearchSection from "./Page/ProductsSearch/ProductSearchSection";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <CartsProvider>
          <Navbar />
          <div className="app">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="products/:id" element={<ProductDetails />} />
              <Route
                path="products/search"
                element={<ProductSearchSection />}
              />
              <Route path="login" element={<Login />} />
              <Route path="signUp" element={<SignUp />} />
              <Route path="carts" element={<Carts />} />
              <Route path="*" element={<h1>No page Found</h1>} />
              {/* Add more routes here as needed */}
            </Routes>
          </div>
          <footer>
            <h1>This is Footer</h1>
          </footer>
        </CartsProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
