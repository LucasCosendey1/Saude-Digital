"use client";

import { useState } from "react";
import { Calendar, Clock, User, Heart, CheckCircle2, Droplet, MapPin, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function DoarSangue() {
  const [formData, setFormData] = useState({
    name: "",
    bloodType: "",
    hemocentro: "",
    date: "",
    time: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.hemocentro || !formData.date || !formData.time) {
      alert("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    // Salvar no localStorage
    const newDonation = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
    };

    const savedDonations = JSON.parse(localStorage.getItem("bloodDonations") || "[]");
    savedDonations.push(newDonation);
    localStorage.setItem("bloodDonations", JSON.stringify(savedDonations));

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    // Limpar formulário
    setFormData({
      name: "",
      bloodType: "",
      hemocentro: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Seção 1: Formulário de Doação - Com degradê */}
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20" style={{ background: 'linear-gradient(to bottom right, #F5DEB3 0%, #F5DEB3 10%, #DC143C 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-2xl mb-4">
                <Droplet className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
                Doação de Sangue
              </h1>
              <p className="text-xl text-gray-800 font-medium">
                Um gesto simples que salva vidas
              </p>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg animate-fade-in">
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                  <p className="text-green-800 font-medium">
                    Doação agendada com sucesso! Você é um herói! 🩸
                  </p>
                </div>
              </div>
            )}

            {/* Formulário */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Heart className="h-6 w-6" />
                  Agendar Doação
                </h2>
              </div>
              
              <div className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Digite seu nome completo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-gray-900 text-base"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tipo Sanguíneo (opcional)
                    </label>
                    <select
                      value={formData.bloodType}
                      onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-gray-900 text-base"
                    >
                      <option value="">Selecione seu tipo sanguíneo</option>
                      <option value="a-positivo">A+</option>
                      <option value="a-negativo">A-</option>
                      <option value="b-positivo">B+</option>
                      <option value="b-negativo">B-</option>
                      <option value="ab-positivo">AB+</option>
                      <option value="ab-negativo">AB-</option>
                      <option value="o-positivo">O+</option>
                      <option value="o-negativo">O-</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hemocentro *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                      <select
                        value={formData.hemocentro}
                        onChange={(e) => setFormData({ ...formData, hemocentro: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-gray-900 text-base appearance-none"
                        required
                      >
                        <option value="">Selecione o hemocentro</option>
                        <option value="hemocentro-pb">Hemocentro da Paraíba - João Pessoa</option>
                        <option value="hospital-trauma">Hospital de Trauma - João Pessoa</option>
                        <option value="hospital-universitario">Hospital Universitário Lauro Wanderley - UFPB</option>
                        <option value="hospital-unimed">Hospital Unimed - João Pessoa</option>
                        <option value="hapvida">Hospital Hapvida - João Pessoa</option>
                        <option value="cican">CICAN - Centro Integrado de Saúde</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Data *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-gray-900 text-base"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Horário *
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-gray-900 text-base"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-lg py-4"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Confirmar Doação
                  </Button>
                </form>

                {/* Requirements Box */}
                <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Requisitos para Doar
                  </h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Ter entre 16 e 69 anos</li>
                    <li>• Pesar no mínimo 50kg</li>
                    <li>• Estar bem alimentado</li>
                    <li>• Levar documento com foto</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Informações e Benefícios - Fundo Branco */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Por que doar sangue?
              </h2>
              <p className="text-lg text-gray-600">
                Entenda a importância do seu gesto
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-lg p-8 border-2 border-red-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-red-100 rounded-xl flex-shrink-0">
                    <Heart className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Juntos somos mais fortes
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      A doação de sangue é um pilar fundamental da saúde. Ao doar sangue, você contribui para cirurgias, tratamentos de câncer e emergências médicas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-lg p-8 border-2 border-red-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  💪 Você sabia?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl flex-shrink-0">•</span>
                    <span className="text-base leading-relaxed">
                      Apenas <strong>1,8%</strong> da população brasileira doa sangue
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl flex-shrink-0">•</span>
                    <span className="text-base leading-relaxed">
                      Cada bolsa pode salvar até <strong>4 vidas</strong> diferentes
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefícios em destaque */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Benefícios da Doação
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-3">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <p className="font-semibold mb-1">Rápido e Seguro</p>
                  <p className="text-sm opacity-90">Processo dura cerca de 40 minutos</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-3">
                    <Heart className="h-8 w-8" />
                  </div>
                  <p className="font-semibold mb-1">Salva Vidas</p>
                  <p className="text-sm opacity-90">Uma doação salva até 4 vidas</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-3">
                    <Droplet className="h-8 w-8" />
                  </div>
                  <p className="font-semibold mb-1">Doe Regularmente</p>
                  <p className="text-sm opacity-90">Homens: 2 meses | Mulheres: 3 meses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}