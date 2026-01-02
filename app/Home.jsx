import { Calendar, Droplet, Video, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const mainActions = [
    {
      icon: Calendar,
      title: "Marcar Consulta",
      description: "Agende sua consulta médica",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      link: "/agendar-consulta"
    },
    {
      icon: Droplet,
      title: "Doar Sangue",
      description: "Agende sua doação de sangue",
      color: "bg-red-500",
      hoverColor: "hover:bg-red-600",
      link: "/doar-sangue"
    },
    {
      icon: Video,
      title: "Atendimento Online",
      description: "Fale com um médico por vídeo",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      link: "/telemedicina"
    },
    {
      icon: FileText,
      title: "Informações de Saúde",
      description: "Aprenda sobre prevenção",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      link: "/informacoes"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Simples */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
            Portal de Saúde
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Cuide da sua saúde de forma fácil
          </p>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 py-8 sm:py-12">
        {/* Mensagem de Boas-vindas */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            Bem-vindo(a)!
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            O que você precisa hoje?
          </p>
        </div>

        {/* Cards de Ações Principais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {mainActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card 
                key={index}
                className="hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                onClick={() => window.location.href = action.link}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Ícone */}
                    <div className={`${action.color} ${action.hoverColor} p-4 rounded-full transition-colors`}>
                      <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    
                    {/* Título */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                      {action.title}
                    </h3>
                    
                    {/* Descrição */}
                    <p className="text-sm sm:text-base text-gray-600">
                      {action.description}
                    </p>
                    
                    {/* Botão */}
                    <Button 
                      className={`w-full ${action.color} ${action.hoverColor} text-white text-base sm:text-lg py-6`}
                    >
                      Acessar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Informação Adicional */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-blue-900 mb-2 text-center">
            💡 Precisa de ajuda?
          </h3>
          <p className="text-blue-800 text-center text-sm sm:text-base">
            Ligue para <strong>(83) 3218-7070</strong> ou visite a unidade de saúde mais próxima
          </p>
        </div>
      </main>

      {/* Footer Simples */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 text-sm">
            © 2024 Portal de Saúde - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
