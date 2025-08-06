import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./context/About";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Search from "./Search";
import DetailPost from "./components/DetailPost";
import Order from "./components/Order";
import NewBlog from "./components/NewBlog";
import ProtectedRoute from "./components/ProtectedRoute";

const LazyBlog = React.lazy(() => import("./components/Blog"));

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        {/* Lazy Loaded Blog with Nested Routes */}
        <Route
          path="/blog"
          element={
            <React.Suspense fallback={<div>Loading Blog...</div>}>
              <LazyBlog />
            </React.Suspense>
          }
        >
          <Route path=":id" element={<DetailPost />} />
          <Route index element={<div />} />
        </Route>
        
        <Route path="/new-blog" element={<NewBlog />} />

        <Route path="/order-summery" element={<Order />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
