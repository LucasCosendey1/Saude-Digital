"use client";

import { Bug, Thermometer, Syringe, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function PreventionSection() {
  const diseases = [
    {
      id: 1,
      name: "Dengue",
      icon: Bug,
      description: "Previna-se eliminando água parada e usando repelente.",
      tip: "Verifique vasos, pneus e calhas regularmente.",
      link: "/prevencao/dengue",
    },
    {
      id: 2,
      name: "Chikungunya",
      icon: Thermometer,
      description: "Combata o mosquito transmissor mantendo ambientes limpos.",
      tip: "Use telas em janelas e portas para proteção.",
      link: "/prevencao/chikungunya",
    },
    {
      id: 3,
      name: "Zika",
      icon: Syringe,
      description: "Proteja-se com roupas adequadas e evite áreas de risco.",
      tip: "Gestantes devem ter cuidado especial.",
      link: "/prevencao/zika",
    },
    {
      id: 4,
      name: "Gripe",
      icon: Wind,
      description: "Vacine-se anualmente e mantenha a higiene das mãos.",
      tip: "Evite aglomerações em períodos de surto.",
      link: "/prevencao/gripe",
    },
  ];

  return (
    <section id="prevention" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Prevenção é o melhor{" "}
            <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
              remédio
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Informações essenciais sobre doenças comuns e como preveni-las no seu dia a dia.
          </p>
        </div>

        {/* Disease Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {diseases.map((disease) => {
            const Icon = disease.icon;
            return (
              <Card
                key={disease.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 bg-white"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-green-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{disease.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3 flex-grow">
                    {disease.description}
                  </p>
                  <p className="text-xs text-gray-500 italic border-t border-gray-100 pt-3">
                    "{disease.tip}"
                  </p>
                  {disease.link !== "#" ? (
                    <Link href={disease.link}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-4 border-green-300 hover:bg-green-50 hover:text-green-700"
                      >
                        Saiba mais
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4 border-green-300 hover:bg-green-50 hover:text-green-700"
                      disabled
                    >
                      Em breve
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}