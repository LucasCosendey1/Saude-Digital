"use client";

import { useState } from "react";
import { Calendar, Clock, User, Video, CheckCircle2, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Telemedicina() {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    type: "",
    date: "",
    time: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.cpf || !formData.type || !formData.date || !formData.time) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    // Validar CPF (apenas formato básico)
    const cpfLimpo = formData.cpf.replace(/\D/g, '');
    if (cpfLimpo.length !== 11) {
      alert("CPF inválido. Digite 11 dígitos.");
      return;
    }

    // Salvar no localStorage
    const newAppointment = {
      id: Date.now(),
      ...formData,
      appointmentType: 'telemedicina',
      createdAt: new Date().toISOString(),
    };

    const savedAppointments = JSON.parse(localStorage.getItem("telemedicina") || "[]");
    savedAppointments.push(newAppointment);
    localStorage.setItem("telemedicina", JSON.stringify(savedAppointments));

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    // Limpar formulário
    setFormData({
      name: "",
      cpf: "",
      type: "",
      date: "",
      time: "",
    });
  };

  // Formatar CPF enquanto digita
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      setFormData({ ...formData, cpf: value });
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #B8E5F5 0%, #B8E5F5 10%, #F5DEB3 100%)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12">
        <div className="max-w-2xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg mb-4">
              <Video className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Telemedicina
            </h1>
            <p className="text-lg text-gray-600">
              Consulta médica por videochamada
            </p>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg animate-fade-in">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                <p className="text-green-800 font-medium">
                  Telemedicina agendada com sucesso!
                </p>
              </div>
            </div>
          )}

          {/* Info Card */}
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
              <Video className="h-5 w-5" />
              Como funciona?
            </h3>
            <ul className="text-sm text-green-800 space-y-2">
              <li>• Consulta realizada por videochamada</li>
              <li>• Você receberá um link por email/SMS antes da consulta</li>
              <li>• Certifique-se de ter uma boa conexão de internet</li>
              <li>• Use smartphone, tablet ou computador com câmera</li>
            </ul>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Video className="h-6 w-6" />
                Agendar Consulta Online
              </h2>
            </div>
            
            <div className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
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
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base"
                      required
                    />
                  </div>
                </div>

                {/* CPF Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    CPF *
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="000.000.000-00"
                      value={formData.cpf}
                      onChange={handleCpfChange}
                      maxLength={14}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base"
                      required
                    />
                  </div>
                </div>

                {/* Type Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo de Consulta *
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base"
                    required
                  >
                    <option value="">Selecione o tipo de consulta</option>
                    <option value="consulta-geral">Consulta Geral (Clínico Geral)</option>
                    <option value="cardiologia">Cardiologia</option>
                    <option value="dermatologia">Dermatologia</option>
                    <option value="pediatria">Pediatria</option>
                    <option value="psicologia">Psicologia</option>
                    <option value="nutricao">Nutrição</option>
                    <option value="ginecologia">Ginecologia</option>
                  </select>
                </div>

                {/* Date and Time Fields */}
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
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base"
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
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg py-4"
                >
                  <Video className="mr-2 h-5 w-5" />
                  Confirmar Agendamento
                </Button>
              </form>

              {/* Requirements Box */}
              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">📋 Importante</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Tenha documento com foto em mãos</li>
                  <li>• Esteja em local tranquilo e com boa iluminação</li>
                  <li>• Teste sua câmera e microfone antes</li>
                  <li>• Entre no link 5 minutos antes do horário</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}