"use client";

import ProtectedRoute from "@/components/ProtectedRoute"; // ← ADICIONAR ESTA LINHA
import { FileText, Calendar, Pill, Heart, Activity, User, Download, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Prontuario() {
  // Dados mockados (exemplo)
  const dadosPessoais = {
    nome: "Lucas Edson da Silva Cosendey",
    cartaoSUS: "123 4567 8901 2345",
    cpf: "123.456.789-00",
    dataNascimento: "15/03/1985",
    tipoSanguineo: "O+",
  };

  const consultasRecentes = [
    {
      id: 1,
      data: "15/12/2024",
      tipo: "Consulta Geral",
      medico: "Dr. João Silva",
      local: "UBS Centro",
      status: "Realizada",
    },
    {
      id: 2,
      data: "03/11/2024",
      tipo: "Cardiologia",
      medico: "Dra. Ana Paula",
      local: "Hospital Municipal",
      status: "Realizada",
    },
    {
      id: 3,
      data: "20/01/2025",
      tipo: "Retorno Cardiologia",
      medico: "Dra. Ana Paula",
      local: "Hospital Municipal",
      status: "Agendada",
    },
  ];

  const exames = [
    {
      id: 1,
      nome: "Hemograma Completo",
      data: "10/12/2024",
      status: "Resultado disponível",
      disponivel: true,
    },
    {
      id: 2,
      nome: "Raio-X Tórax",
      data: "28/11/2024",
      status: "Resultado disponível",
      disponivel: true,
    },
    {
      id: 3,
      nome: "Eletrocardiograma",
      data: "05/01/2025",
      status: "Aguardando resultado",
      disponivel: false,
    },
  ];

  const vacinas = [
    {
      id: 1,
      nome: "COVID-19 (3ª dose)",
      data: "15/08/2024",
      lote: "CV12345",
    },
    {
      id: 2,
      nome: "Gripe (Influenza)",
      data: "10/04/2024",
      lote: "GR98765",
    },
    {
      id: 3,
      nome: "Hepatite B",
      data: "20/01/2020",
      lote: "HB54321",
    },
  ];

  const medicamentos = [
    {
      id: 1,
      nome: "Losartana 50mg",
      dosagem: "1 comprimido ao dia",
      inicio: "01/10/2024",
      medico: "Dr. João Silva",
    },
    {
      id: 2,
      nome: "Sinvastatina 20mg",
      dosagem: "1 comprimido à noite",
      inicio: "03/11/2024",
      medico: "Dra. Ana Paula",
    },
  ];

  return (
    <ProtectedRoute>
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #B8E5F5 0%, #B8E5F5 10%, #F5DEB3 100%)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg mb-4">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Prontuário Online
            </h1>
            <p className="text-lg text-gray-600">
              Seu histórico médico completo em um só lugar
            </p>
          </div>

          {/* Dados Pessoais */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">Dados Pessoais</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Nome Completo</p>
                <p className="font-semibold text-gray-900">{dadosPessoais.nome}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Cartão do SUS</p>
                <p className="font-semibold text-gray-900">{dadosPessoais.cartaoSUS}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">CPF</p>
                <p className="font-semibold text-gray-900">{dadosPessoais.cpf}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Data de Nascimento</p>
                <p className="font-semibold text-gray-900">{dadosPessoais.dataNascimento}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Tipo Sanguíneo</p>
                <p className="font-semibold text-gray-900">{dadosPessoais.tipoSanguineo}</p>
              </div>
            </div>
          </div>

          {/* Consultas Recentes */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Consultas</h2>
            </div>
            <div className="space-y-4">
              {consultasRecentes.map((consulta) => (
                <div
                  key={consulta.id}
                  className="border-2 border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-gray-900">{consulta.tipo}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          consulta.status === "Realizada" 
                            ? "bg-green-100 text-green-700" 
                            : "bg-blue-100 text-blue-700"
                        }`}>
                          {consulta.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        <strong>Médico:</strong> {consulta.medico}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Local:</strong> {consulta.local}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-purple-600">{consulta.data}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exames */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Exames</h2>
            </div>
            <div className="space-y-4">
              {exames.map((exame) => (
                <div
                  key={exame.id}
                  className="border-2 border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-900 mb-1">{exame.nome}</h3>
                      <p className="text-sm text-gray-600">Data: {exame.data}</p>
                      <p className={`text-sm font-semibold mt-1 ${
                        exame.disponivel ? "text-green-600" : "text-orange-600"
                      }`}>
                        {exame.status}
                      </p>
                    </div>
                    {exame.disponivel && (
                      <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm font-semibold">
                          <Eye className="h-4 w-4" />
                          Ver
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-semibold">
                          <Download className="h-4 w-4" />
                          Baixar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cartão de Vacinas */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-6 w-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">Cartão de Vacinas</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Vacina</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Data</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Lote</th>
                  </tr>
                </thead>
                <tbody>
                  {vacinas.map((vacina) => (
                    <tr key={vacina.id} className="border-b border-gray-100 hover:bg-purple-50 transition-colors">
                      <td className="py-3 px-4 text-gray-900">{vacina.nome}</td>
                      <td className="py-3 px-4 text-gray-600">{vacina.data}</td>
                      <td className="py-3 px-4 text-gray-600 font-mono text-sm">{vacina.lote}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Medicamentos em Uso */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Pill className="h-6 w-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">Medicamentos em Uso</h2>
            </div>
            <div className="space-y-4">
              {medicamentos.map((med) => (
                <div
                  key={med.id}
                  className="border-2 border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{med.nome}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                    <p><strong>Dosagem:</strong> {med.dosagem}</p>
                    <p><strong>Início:</strong> {med.inicio}</p>
                    <p className="sm:col-span-2"><strong>Prescrito por:</strong> {med.medico}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
    </ProtectedRoute>
  );
}
