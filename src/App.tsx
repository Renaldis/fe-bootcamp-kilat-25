import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/admin/dashboard/Dashboard";
import DashboardLayout from "./layout/dashboardLayout";
import SignUpPage from "./pages/auth/sign-up";
import SignInPage from "./pages/auth/sign-in";
import { R_TOKEN } from "./utils/constants";
import { AuthProvider } from "./context/auth-context";

function App() {
  const LoginRoute = ({ children }: { children: React.ReactNode }) => {
    if (localStorage.getItem(R_TOKEN) == undefined) {
      return children;
    } else if (localStorage.getItem(R_TOKEN) !== undefined) {
      return <Navigate to={"/dashboard"} />;
    }
  };

  const DashboardRoute = ({ children }: { children: React.ReactNode }) => {
    if (localStorage.getItem(R_TOKEN) !== null) {
      return children;
    } else if (localStorage.getItem(R_TOKEN) == null) {
      return <Navigate to={"/auth/sign-in"} />;
    }
  };
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/auth/sign-up"
            element={
              <LoginRoute>
                <SignUpPage />
              </LoginRoute>
            }
          />
          <Route
            path="/auth/sign-in"
            element={
              <LoginRoute>
                <SignInPage />
              </LoginRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <DashboardRoute>
                  <DashboardPage />
                </DashboardRoute>
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard/create"
            element={
              <DashboardLayout>
                <DashboardRoute>
                  <DashboardPage />
                </DashboardRoute>
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard/profile"
            element={
              <DashboardLayout>
                <DashboardRoute>
                  <DashboardPage />
                </DashboardRoute>
              </DashboardLayout>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
