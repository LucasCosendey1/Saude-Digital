"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // LOGIN RÁPIDO: lucas@gmail.com / lucas
    if (formData.email === "lucas@gmail.com" && formData.password === "lucas") {
      const fakeUser = {
        id: 999,
        fullName: "Lucas Cosendey",
        email: "lucas@gmail.com",
        cpf: "000.000.000-00",
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem("currentUser", JSON.stringify(fakeUser));
      alert("Login realizado com sucesso!");
      window.location.href = "/";
      return;
    }

    // LOGIN NORMAL: Verificar usuários cadastrados
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: any) => u.email === formData.email);

    if (!user) {
      alert("Email não encontrado. Crie uma conta primeiro!");
      return;
    }

    if (user.password !== formData.password) {
      alert("Senha incorreta!");
      return;
    }

    // Login com sucesso
    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("Login realizado com sucesso!");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #E8F4E8 0%, #FFF9E6 50%, #FFFFFF 100%)' }}>
      <Navbar />
      
      <div className="flex items-center justify-center px-4 py-8 pt-24 sm:pt-28">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Bem-vindo de volta!
              </h1>
              <p className="text-green-50">
                Acesse sua conta para continuar
              </p>
            </div>

            {/* Form */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base"
                      required
                    />
                  </div>
                </div>

                {/* Senha */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Esqueceu a senha */}
                <div className="text-right">
                  <a href="#" className="text-sm text-green-600 hover:text-green-700 font-medium">
                    Esqueceu a senha?
                  </a>
                </div>

                {/* Info Box - Login de Teste */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm leading-relaxed">
                    <strong>💡 Login de teste:</strong><br />
                    Email: <code className="bg-blue-100 px-2 py-1 rounded text-xs">lucas@gmail.com</code><br />
                    Senha: <code className="bg-blue-100 px-2 py-1 rounded text-xs">lucas</code>
                  </p>
                </div>

                {/* Botão Entrar */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg py-4"
                >
                  Entrar
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Ainda não tem conta?</span>
                </div>
              </div>

              {/* Link Cadastro */}
              <Link href="/cadastro">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-green-300 text-green-700 hover:bg-green-50"
                >
                  Criar uma conta
                </Button>
              </Link>
            </div>
          </div>

          {/* Termos */}
          <p className="text-center text-sm text-gray-700 mt-6">
            Ao fazer login, você concorda com nossos{" "}
            <a href="#" className="text-green-600 hover:text-green-700 font-medium">
              Termos de Uso
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}