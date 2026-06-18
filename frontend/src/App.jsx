import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";

import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import adminCourses from "./pages/adminCourses";

import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Public Pages */}

      <Route element={<PublicLayout />}>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Route>

      {/* Student Dashboard */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRole="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      {/* Admin Dashboard */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="admin">
            <adminDashboard />
          </ProtectedRoute>

          
        }
      />
      <Route
  path="/admin/courses"
  element={
    <ProtectedRoute allowedRole="admin">
      <adminCourses />
    </ProtectedRoute>
  }
/>

    </Routes>
  );
}

export default App;