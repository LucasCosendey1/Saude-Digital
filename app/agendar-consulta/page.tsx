"use client";

import { useState } from "react";
import { Calendar, Clock, User, Stethoscope, CheckCircle2, MapPin, Syringe, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function AgendarConsulta() {
  const [activeTab, setActiveTab] = useState("consulta");
  const [consultaData, setConsultaData] = useState({
    name: "",
    cpf: "",
    type: "",
    date: "",
    time: "",
  });

  const [vacinaData, setVacinaData] = useState({
    name: "",
    cpf: "",
    vaccineType: "",
    date: "",
    time: "",
    location: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleConsultaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consultaData.name || !consultaData.cpf || !consultaData.type || !consultaData.date || !consultaData.time) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    // Validar CPF
    const cpfLimpo = consultaData.cpf.replace(/\D/g, '');
    if (cpfLimpo.length !== 11) {
      alert("CPF inválido. Digite 11 dígitos.");
      return;
    }

    // Salvar no localStorage
    const newAppointment = {
      id: Date.now(),
      ...consultaData,
      createdAt: new Date().toISOString(),
    };

    const savedAppointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    savedAppointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(savedAppointments));

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    // Limpar formulário
    setConsultaData({
      name: "",
      cpf: "",
      type: "",
      date: "",
      time: "",
    });
  };

  const handleVacinaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!vacinaData.name || !vacinaData.cpf || !vacinaData.vaccineType || !vacinaData.date || !vacinaData.time || !vacinaData.location) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    // Validar CPF
    const cpfLimpo = vacinaData.cpf.replace(/\D/g, '');
    if (cpfLimpo.length !== 11) {
      alert("CPF inválido. Digite 11 dígitos.");
      return;
    }

    // Salvar no localStorage
    const newVaccination = {
      id: Date.now(),
      ...vacinaData,
      createdAt: new Date().toISOString(),
    };

    const savedVaccinations = JSON.parse(localStorage.getItem("vaccinations") || "[]");
    savedVaccinations.push(newVaccination);
    localStorage.setItem("vaccinations", JSON.stringify(savedVaccinations));

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    // Limpar formulário
    setVacinaData({
      name: "",
      cpf: "",
      vaccineType: "",
      date: "",
      time: "",
      location: "",
    });
  };

  // Formatar CPF enquanto digita (para consultas)
  const handleConsultaCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      setConsultaData({ ...consultaData, cpf: value });
    }
  };

  // Formatar CPF enquanto digita (para vacinas)
  const handleVacinaCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      setVacinaData({ ...vacinaData, cpf: value });
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #B8E5F5 0%, #B8E5F5 10%, #F5DEB3 100%)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12">
        <div className="max-w-2xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl shadow-lg mb-4">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Consulta Presencial
            </h1>
            <p className="text-lg text-gray-600">
              Agende sua consulta ou exame presencial
            </p>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg animate-fade-in">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                <p className="text-green-800 font-medium">
                  Agendamento realizado com sucesso!
                </p>
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-2 mb-6 bg-white p-2 rounded-lg shadow-sm">
            <button
              onClick={() => setActiveTab("consulta")}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                activeTab === "consulta"
                  ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Stethoscope className="inline-block mr-2 h-5 w-5" />
              Consultas e Exames
            </button>
            <button
              onClick={() => setActiveTab("vacina")}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                activeTab === "vacina"
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Syringe className="inline-block mr-2 h-5 w-5" />
              Vacinação
            </button>
          </div>

          {/* Consulta Form */}
          {activeTab === "consulta" && (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Stethoscope className="h-6 w-6" />
                  Agendar Consulta ou Exame
                </h2>
              </div>
              
              <div className="p-6 sm:p-8">
                <form onSubmit={handleConsultaSubmit} className="space-y-6">
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
                        value={consultaData.name}
                        onChange={(e) => setConsultaData({ ...consultaData, name: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
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
                        value={consultaData.cpf}
                        onChange={handleConsultaCpfChange}
                        maxLength={14}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                        required
                      />
                    </div>
                  </div>

                  {/* Type Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tipo de Atendimento *
                    </label>
                    <select
                      value={consultaData.type}
                      onChange={(e) => setConsultaData({ ...consultaData, type: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                      required
                    >
                      <option value="">Selecione o tipo de atendimento</option>
                      <option value="clinico-geral">Clínico Geral</option>
                      <option value="cardiologia">Cardiologia</option>
                      <option value="dermatologia">Dermatologia</option>
                      <option value="pediatria">Pediatria</option>
                      <option value="ginecologia">Ginecologia</option>
                      <option value="exames-sangue">Exames de Sangue</option>
                      <option value="exames-imagem">Exames de Imagem</option>
                      <option value="outros-exames">Outros Exames</option>
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
                          value={consultaData.date}
                          onChange={(e) => setConsultaData({ ...consultaData, date: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
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
                          value={consultaData.time}
                          onChange={(e) => setConsultaData({ ...consultaData, time: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white text-lg py-4"
                  >
                    Confirmar Agendamento
                  </Button>
                </form>
              </div>
            </div>
          )}

          {/* Vacina Form */}
          {activeTab === "vacina" && (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Syringe className="h-6 w-6" />
                  Agendar Vacinação
                </h2>
              </div>
              
              <div className="p-6 sm:p-8">
                <form onSubmit={handleVacinaSubmit} className="space-y-6">
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
                        value={vacinaData.name}
                        onChange={(e) => setVacinaData({ ...vacinaData, name: e.target.value })}
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
                        value={vacinaData.cpf}
                        onChange={handleVacinaCpfChange}
                        maxLength={14}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base"
                        required
                      />
                    </div>
                  </div>

                  {/* Vaccine Type Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tipo de Vacina *
                    </label>
                    <select
                      value={vacinaData.vaccineType}
                      onChange={(e) => setVacinaData({ ...vacinaData, vaccineType: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base"
                      required
                    >
                      <option value="">Selecione o tipo de vacina</option>
                      <option value="covid-19">COVID-19</option>
                      <option value="gripe">Gripe (Influenza)</option>
                      <option value="hepatite-b">Hepatite B</option>
                      <option value="tetano">Tétano</option>
                      <option value="febre-amarela">Febre Amarela</option>
                      <option value="hpv">HPV</option>
                      <option value="pneumonia">Pneumonia</option>
                      <option value="meningite">Meningite</option>
                    </select>
                  </div>

                  {/* Location Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Local de Vacinação *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <select
                        value={vacinaData.location}
                        onChange={(e) => setVacinaData({ ...vacinaData, location: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base"
                        required
                      >
                        <option value="">Selecione o local</option>
                        <option value="hemocentro-jp">Hemocentro da Paraíba - João Pessoa</option>
                        <option value="hospital-trauma">Hospital de Trauma - João Pessoa</option>
                        <option value="hospital-metropolitano">Hospital Metropolitano - Santa Rita</option>
                        <option value="policlinica-mandacaru">Policlínica de Mandacaru</option>
                        <option value="policlinica-mangabeira">Policlínica de Mangabeira</option>
                        <option value="upa-valentina">UPA de Valentina de Figueiredo</option>
                      </select>
                    </div>
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
                          value={vacinaData.date}
                          onChange={(e) => setVacinaData({ ...vacinaData, date: e.target.value })}
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
                          value={vacinaData.time}
                          onChange={(e) => setVacinaData({ ...vacinaData, time: e.target.value })}
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
                    Confirmar Vacinação
                  </Button>
                </form>

                {/* Requirements Box */}
                <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">📋 Requisitos para Vacinação</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Documento com foto (RG ou CNH)</li>
                    <li>• Cartão de vacinação (se tiver)</li>
                    <li>• Comparecer no horário agendado</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}