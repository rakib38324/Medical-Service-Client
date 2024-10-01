"use client";
import { ReactNode, useEffect } from "react";
import { getUserFromLocalStorage } from "../common/utilis";
import { usePathname, useRouter } from "next/navigation";

// Define the permitted routes type and default value
const unprotectedRoutes: string[] = [
  "/login",
  "/register",
  "/forget-password",
  "/reset-password",
  "/verify-email",
];

// Define the Props for the ProtectedRoute component
interface ProtectedRouteProps {
  children: ReactNode;
  permittedRoutes?: string[]; // Optional array of permitted routes
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  permittedRoutes = unprotectedRoutes,
}) => {
  const pathname = usePathname(); // Get the current path

  const router = useRouter();
  const user = getUserFromLocalStorage();

  useEffect(() => {
    // Redirect if the user is not logged in and trying to access a protected route
    if (!user && !permittedRoutes.includes(pathname)) {
      router.push("/login");
    }
  }, [user, router, permittedRoutes,pathname]);

  return <>{children}</>; // Render children if no redirect occurs
};

export default ProtectedRoute;
