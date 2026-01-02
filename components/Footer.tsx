import { Heart, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-gray-900 text-white border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                Saúde Digital
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Cuidar da sua saúde nunca foi tão fácil. Informação, prevenção e atendimento em um só lugar.
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#prevention" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Prevenção
                </a>
              </li>
              <li>
                <a href="#appointments" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Agendamentos
                </a>
              </li>
              <li>
                <a href="#footer" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="text-sm text-gray-400">contato@saudedigital.gov.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span className="text-sm text-gray-400">136 - Disque Saúde</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-sm text-gray-400">Brasil - Sistema Único de Saúde</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-center text-gray-400">
            © {currentYear} Saúde Digital - Sistema Único de Saúde. Protótipo para fins educacionais.
          </p>
        </div>
      </div>
    </footer>
  );
}