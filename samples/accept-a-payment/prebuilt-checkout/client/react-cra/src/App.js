import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "./components/Home";
import { OrderResult } from "./components/OrderResult";
import { Checkout } from "./components/Checkout";
import { PageNotFound } from "./components/PageNotFound";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { BasketProvider } from "./context/BasketContext";
import useQuery from "./utils/query";

const App = () => {
  let query = useQuery();
  let id = query.get("id");

  return (
    <AuthProvider>
      <BasketProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order-result" element={<OrderResult />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/customer-checkout"
            element={
              <ProtectedRoute redirectTo={`/customer-checkout?id=${id}`}>
                <Checkout useSaveCards={true} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BasketProvider>
    </AuthProvider>
  );
};

export default App;
