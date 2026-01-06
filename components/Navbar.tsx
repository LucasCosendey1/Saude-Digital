"use client";

import { useState, useEffect } from "react";
import { Menu, X, Heart, User, LogOut, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [showAgendarDropdown, setShowAgendarDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Verificar se há usuário logado
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    window.location.href = "/";
  };

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/prevencao", label: "Prevenção" },
    { 
      href: "/agendar-consulta", 
      label: "Agendar Consulta",
      hasDropdown: true,
      dropdownItems: [
        { href: "/agendar-consulta/presencial", label: "Consulta Presencial" },
        { href: "/agendar-consulta/telemedicina", label: "Telemedicina" },
      ]
    },
    { href: "/transparencia", label: "Portal da Transparência" },
    { href: "/prontuario", label: "Prontuário" },
    { href: "/como-funciona", label: "Como Funciona" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-gray-900">Saúde Itabaiana</div>
              <div className="text-xs text-gray-600">Prefeitura Municipal</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.hasDropdown ? (
                  <>
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-green-700 font-medium transition-colors relative flex items-center gap-1"
                      onMouseEnter={() => setShowAgendarDropdown(true)}
                      onMouseLeave={() => setShowAgendarDropdown(false)}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                    
                    {/* Dropdown */}

                    <div 
                      className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 transition-all duration-300 ${
                        showAgendarDropdown 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setShowAgendarDropdown(true)}
                      onMouseLeave={() => setShowAgendarDropdown(false)}
                    >
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-green-700 font-medium transition-colors relative"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-3">
                <span className="text-gray-700 text-sm">
                  Olá, <strong>{currentUser.fullName?.split(" ")[0]}</strong>
                </span>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="border-red-300 text-red-600 hover:bg-red-50"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </Button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-300 text-green-700 hover:bg-green-50"
                  >
                    Entrar
                  </Button>
                </Link>
                <Link href="/cadastro">
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                  >
                    Cadastrar
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-700 hover:text-green-700 font-medium transition-colors"
                >
                  {link.label}
                </Link>
                {link.hasDropdown && link.dropdownItems && (
                  <div className="ml-4 mt-2 space-y-2">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-sm text-gray-600 hover:text-green-700 transition-colors"
                      >
                        • {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              {currentUser ? (
                <>
                  <p className="text-sm text-gray-600 text-center">
                    Olá, <strong>{currentUser.fullName?.split(" ")[0]}</strong>
                  </p>
                  <Button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    variant="outline"
                    className="w-full border-red-300 text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sair
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                      Entrar
                    </Button>
                  </Link>
                  <Link href="/cadastro" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                      Cadastrar
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}