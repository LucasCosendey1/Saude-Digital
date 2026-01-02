"use client";

import { Heart, Calendar, Shield, Users, Video, Droplet, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ComoFunciona() {
  const features = [
    {
      icon: Calendar,
      title: "Agendamento Fácil",
      description: "Agende consultas presenciais, exames e vacinação de forma simples e rápida, sem filas.",
    },
    {
      icon: Video,
      title: "Telemedicina",
      description: "Consultas médicas por videochamada no conforto da sua casa, com profissionais qualificados.",
    },
    {
      icon: Droplet,
      title: "Doação de Sangue",
      description: "Agende sua doação de sangue e ajude a salvar vidas em hemocentros próximos.",
    },
    {
      icon: Shield,
      title: "Prevenção",
      description: "Informações completas sobre doenças e como se prevenir de forma eficaz.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Crie sua Conta",
      description: "Cadastre-se gratuitamente com seus dados básicos. É rápido e seguro.",
    },
    {
      step: "2",
      title: "Escolha o Serviço",
      description: "Selecione entre consulta presencial, telemedicina, doação de sangue ou informações de prevenção.",
    },
    {
      step: "3",
      title: "Agende seu Atendimento",
      description: "Escolha data, horário e local que melhor se adequam à sua rotina.",
    },
    {
      step: "4",
      title: "Compareça ou Conecte-se",
      description: "Para consultas presenciais, compareça no local. Para telemedicina, acesse o link enviado.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #B8E5F5 0%, #B8E5F5 10%, #F5DEB3 100%)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl shadow-lg mb-4">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
              Como Funciona?
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Saúde Digital: facilitando seu acesso aos serviços do SUS
            </p>
          </div>

          {/* Objetivo */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Users className="h-7 w-7 text-cyan-600" />
              Nosso Objetivo
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              O <strong>Saúde Digital</strong> é uma plataforma online do Sistema Único de Saúde (SUS) 
              criada para <strong>facilitar o acesso da população aos serviços de saúde pública</strong>. 
              Nosso objetivo é democratizar o atendimento médico, reduzir filas e tornar a experiência 
              de cuidar da saúde mais simples, rápida e eficiente.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Aqui você pode agendar consultas, acessar telemedicina, programar doação de sangue e 
              se informar sobre prevenção de doenças - tudo em um só lugar, de forma gratuita e 
              acessível para todos os brasileiros.
            </p>
          </div>

          {/* Serviços Disponíveis */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Serviços Disponíveis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Como Usar */}
          <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl shadow-xl p-8 mb-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Como Usar a Plataforma
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {howItWorks.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-cyan-50 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefícios */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Por que usar o Saúde Digital?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">100% Gratuito</h4>
                  <p className="text-sm text-gray-600">Todos os serviços são oferecidos pelo SUS</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Sem Filas</h4>
                  <p className="text-sm text-gray-600">Agende online e evite longas esperas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Acessível 24/7</h4>
                  <p className="text-sm text-gray-600">Acesse quando e onde quiser</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Rápido e Simples</h4>
                  <p className="text-sm text-gray-600">Interface intuitiva e fácil de usar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Seguro</h4>
                  <p className="text-sm text-gray-600">Seus dados são protegidos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Para Todos</h4>
                  <p className="text-sm text-gray-600">Qualquer brasileiro pode usar</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl shadow-xl p-8 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Pronto para começar?
            </h2>
            <p className="text-lg mb-6 opacity-95">
              Crie sua conta gratuitamente e tenha acesso a todos os serviços!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cadastro">
                <button className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  Criar Conta Grátis
                </button>
              </Link>
              <Link href="/login">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white hover:bg-white/20 transition-all flex items-center gap-2 justify-center">
                  Login
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}