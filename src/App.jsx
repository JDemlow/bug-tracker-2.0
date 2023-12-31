import React from "react";
import "../src/index.css";
import Employee from "./compontents/Employee";
import Footer from "./compontents/Footer";
import { useState } from "react";
import TodoApp from "./compontents/TodoApp";
import AddEmployee from "./compontents/AddEmployee";
import { v4 as uuidv4 } from "uuid";
import EditEmployee from "./compontents/EditEmployee";
import Header from "./compontents/Header";
import Employees from "./pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./compontents/Signin";
import Account from "./compontents/Account";
import { AuthContextProvider } from "./compontents/context/AuthContext";
import ProtectedRoute from "./compontents/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route
            path="/account"
            element={
              <>
                <Header />
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
                <Footer />
              </>
            }
          />
          <Route
            path="/employees"
            element={
              <>
                <Header />
                <ProtectedRoute>
                  <Employees />
                </ProtectedRoute>
                <Footer />
              </>
            }
          />
          <Route
            path="/tasks"
            element={
              <>
                <Header />
                <ProtectedRoute>
                  <TodoApp />
                </ProtectedRoute>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
