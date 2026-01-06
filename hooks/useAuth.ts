"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuth(redirectTo = "/login") {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Verificar se há usuário logado
    const currentUser = localStorage.getItem("currentUser");
    
    if (currentUser) {
      setUser(JSON.parse(currentUser));
      setIsAuthenticated(true);
      setIsLoading(false);
    } else {
      // Não está logado - redirecionar
      setIsLoading(false);
      router.push(redirectTo);
    }
  }, [router, redirectTo]);

  return { isAuthenticated, isLoading, user };
}