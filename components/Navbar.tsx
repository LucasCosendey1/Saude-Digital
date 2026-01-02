"use client";

import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Início", href: "/", isExternal: true },
    { name: "Prevenção", href: "/prevencao", isExternal: true },
    { name: "Agendamentos", href: "/agendar-consulta", isExternal: true },
    { name: "Doação de Sangue", href: "/doar-sangue", isExternal: true },
    { name: "Telemedicina", href: "/telemedicina", isExternal: true },
    { name: "Contato", href: "#footer", isExternal: false },
  ];

  const handleNavClick = (href: string, isExternal: boolean) => {
    setIsOpen(false);
    
    if (!isExternal && pathname !== "/") {
      window.location.href = "/" + href;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">
                Saúde Digital
              </span>
              <p className="text-xs text-gray-600">Sistema Único de Saúde</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.isExternal ? (
                <Link key={link.name} href={link.href}>
                  <button
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
                  >
                    {link.name}
                  </button>
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href, link.isExternal)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              )
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/login">
              <Button variant="outline" size="sm" className="text-gray-700 hover:text-cyan-600 hover:bg-cyan-50">
                Entrar
              </Button>
            </Link>
            <Link href="/cadastro">
              <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white shadow-md">
                Cadastrar
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <Link key={link.name} href={link.href}>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
                    >
                      {link.name}
                    </button>
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href, link.isExternal)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
                  >
                    {link.name}
                  </button>
                )
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link href="/login">
                  <Button variant="outline" size="sm" className="w-full text-gray-700 hover:text-cyan-600 hover:bg-cyan-50">
                    Entrar
                  </Button>
                </Link>
                <Link href="/cadastro">
                  <Button size="sm" className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white">
                    Cadastrar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}