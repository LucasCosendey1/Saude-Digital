"use client";

import { Heart, MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { label: "Início", href: "/" },
    { label: "Prevenção", href: "/#prevention" },
    { label: "Agendamentos", href: "/#appointments" },
    { label: "Como Funciona", href: "/como-funciona" },
  ];

  const services = [
    { label: "Consultas Presenciais", href: "/agendar-consulta" },
    { label: "Telemedicina", href: "/telemedicina" },
    { label: "Prontuário Online", href: "/prontuario" },
    { label: "Portal da Transparência", href: "/transparencia" },
  ];

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">Saúde Itabaiana</div>
                <div className="text-sm text-green-200">Prefeitura Municipal</div>
              </div>
            </div>
            <p className="text-sm text-green-100 leading-relaxed">
              Cuidando da saúde dos cidadãos de Itabaiana com qualidade e compromisso.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-green-100 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-green-100 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-green-100">
                  Itabaiana, Sergipe - Brasil
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-green-100">
                  Central: 0800 XXX XXXX
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-green-100">
                  saude@itabaiana.se.gov.br
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-green-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-green-200 text-center md:text-left">
              © {new Date().getFullYear()} Prefeitura Municipal de Itabaiana - SE. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-green-200 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-sm text-green-200 hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}