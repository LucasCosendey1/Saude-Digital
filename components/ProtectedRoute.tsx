"use client";

import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E8F4E8 0%, #FFF9E6 50%, #FFFFFF 100%)' }}>
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-green-600 mx-auto mb-4" />
          <p className="text-gray-700 text-lg">Verificando acesso...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Vai redirecionar automaticamente
  }

  return <>{children}</>;
}