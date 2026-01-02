"use client";

import { Bug, Thermometer, Syringe, Wind, Shield, Search, Heart, AlertTriangle, Users, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";

export default function PrevencaoPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("todas");

  const categories = [
    { id: "todas", name: "Todas", icon: Shield },
    { id: "doencas", name: "Doenças", icon: Heart },
    { id: "violencia", name: "Violência", icon: AlertTriangle },
    { id: "seguranca", name: "Segurança", icon: Lock },
    { id: "social", name: "Social", icon: Users },
  ];

  const items = [
    // DOENÇAS
    {
      id: 1,
      name: "Dengue",
      icon: Bug,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      link: "/prevencao/dengue",
      category: "doencas",
    },
    {
      id: 2,
      name: "Chikungunya",
      icon: Thermometer,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      link: "/prevencao/chikungunya",
      category: "doencas",
    },
    {
      id: 3,
      name: "Zika Vírus",
      icon: Syringe,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      link: "/prevencao/zika",
      category: "doencas",
    },
    {
      id: 4,
      name: "Gripe (Influenza)",
      icon: Wind,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      link: "/prevencao/gripe",
      category: "doencas",
    },
    {
      id: 5,
      name: "COVID-19",
      icon: Shield,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      link: "/prevencao/covid-19",
      category: "doencas",
    },
    {
      id: 6,
      name: "Hepatite",
      icon: Shield,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      link: "#",
      category: "doencas",
    },
    {
      id: 7,
      name: "Tuberculose",
      icon: Shield,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      link: "#",
      category: "doencas",
    },
    {
      id: 8,
      name: "HIV/AIDS",
      icon: Shield,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      link: "#",
      category: "doencas",
    },
    
    // VIOLÊNCIA
    {
      id: 101,
      name: "Feminicídio",
      icon: AlertTriangle,
      color: "text-red-700",
      bgColor: "bg-red-50",
      borderColor: "border-red-300",
      link: "#",
      category: "violencia",
    },
    {
      id: 102,
      name: "Violência Doméstica",
      icon: AlertTriangle,
      color: "text-orange-700",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-300",
      link: "#",
      category: "violencia",
    },
    {
      id: 103,
      name: "Abuso Infantil",
      icon: AlertTriangle,
      color: "text-purple-700",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-300",
      link: "#",
      category: "violencia",
    },
    {
      id: 104,
      name: "Violência Contra Idosos",
      icon: AlertTriangle,
      color: "text-amber-700",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-300",
      link: "#",
      category: "violencia",
    },
    {
      id: 105,
      name: "Bullying e Cyberbullying",
      icon: AlertTriangle,
      color: "text-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
      link: "#",
      category: "violencia",
    },
    
    // SEGURANÇA
    {
      id: 201,
      name: "Golpes Financeiros",
      icon: Lock,
      color: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-300",
      link: "#",
      category: "seguranca",
    },
    {
      id: 202,
      name: "Golpes Online (Phishing)",
      icon: Lock,
      color: "text-cyan-700",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-300",
      link: "#",
      category: "seguranca",
    },
    {
      id: 203,
      name: "Fraudes Telefônicas",
      icon: Lock,
      color: "text-indigo-700",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-300",
      link: "#",
      category: "seguranca",
    },
    {
      id: 204,
      name: "Roubo de Identidade",
      icon: Lock,
      color: "text-violet-700",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-300",
      link: "#",
      category: "seguranca",
    },
    {
      id: 205,
      name: "Segurança Digital",
      icon: Lock,
      color: "text-slate-700",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-300",
      link: "#",
      category: "seguranca",
    },
    
    // SOCIAL
    {
      id: 301,
      name: "Abuso de Álcool",
      icon: Users,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      link: "#",
      category: "social",
    },
    {
      id: 302,
      name: "Uso de Drogas",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      link: "#",
      category: "social",
    },
    {
      id: 303,
      name: "Saúde Mental",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      link: "#",
      category: "social",
    },
    {
      id: 304,
      name: "Prevenção ao Suicídio",
      icon: Users,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      link: "#",
      category: "social",
    },
    {
      id: 305,
      name: "Gravidez na Adolescência",
      icon: Users,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      link: "#",
      category: "social",
    },
  ];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "todas" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #B8E5F5 0%, #B8E5F5 10%, #F5DEB3 100%)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Central de Prevenção
            </h1>
            <p className="text-base text-gray-600">
              Informações essenciais para proteger você e sua família
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                    activeCategory === category.id
                      ? "bg-cyan-500 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
            {filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.id} href={item.link}>
                  <div className={`bg-white rounded-lg border-2 ${item.borderColor} p-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer group`}>
                    <div className="flex flex-col items-center text-center gap-3">
                      {/* Icon */}
                      <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`h-6 w-6 ${item.color}`} />
                      </div>
                      
                      {/* Name */}
                      <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nenhum resultado encontrado
              </p>
            </div>
          )}

          {/* Emergency Contacts */}
          <div className="mt-12 bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
              📞 Números de Emergência
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-red-600">190</p>
                <p className="text-xs text-gray-600">Polícia Militar</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">192</p>
                <p className="text-xs text-gray-600">SAMU</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">193</p>
                <p className="text-xs text-gray-600">Bombeiros</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">180</p>
                <p className="text-xs text-gray-600">Mulher (Violência)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">100</p>
                <p className="text-xs text-gray-600">Direitos Humanos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">136</p>
                <p className="text-xs text-gray-600">Disque Saúde</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">188</p>
                <p className="text-xs text-gray-600">CVV (Suicídio)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-600">181</p>
                <p className="text-xs text-gray-600">Disque Denúncia</p>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              {filteredItems.length} {filteredItems.length === 1 ? "tema disponível" : "temas disponíveis"}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}