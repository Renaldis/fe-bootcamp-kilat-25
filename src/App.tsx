import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/admin/dashboard/Dashboard";
import DashboardLayout from "./layout/dashboardLayout";
import SignUpPage from "./pages/auth/sign-up";
import SignInPage from "./pages/auth/sign-in";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/sign-up" element={<SignUpPage></SignUpPage>} />
        <Route path="/auth/sign-in" element={<SignInPage></SignInPage>} />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/create"
          element={
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
