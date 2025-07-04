import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface RotaPrivadaProps {
  children: ReactNode;
}

export default function RotaPrivada({ children }: RotaPrivadaProps) {
  const { usuario } = useAuth();
  const location = useLocation();

  if (!usuario) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
