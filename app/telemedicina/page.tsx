"use client";

import { useState } from "react";
import { Calendar, Clock, User, Video, CheckCircle2, CreditCard, Users as UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Telemedicina() {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    cartaoSUS: "",
    paraQuem: "proprio",
    outraPessoaNome: "",
    outraPessoaCPF: "",
    outraPessoaCartaoSUS: "",
    parentesco: "",
    especialidade: "",
    medico: "",
    date: "",
    time: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [medicosFiltrados, setMedicosFiltrados] = useState<any[]>([]);
  const [horariosDisponiveis, setHorariosDisponiveis] = useState<string[]>([]);

  const parentescoList = ["Filho(a)", "Pai", "Mãe", "Cônjuge", "Irmão(ã)", "Avô/Avó", "Neto(a)", "Tio(a)", "Outro"];

  const medicos = [
    { id: 1, nome: "Dr. João Silva", especialidade: "Clínico Geral", dias: ["segunda", "quarta", "sexta"], horarios: ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"] },
    { id: 2, nome: "Dra. Ana Costa", especialidade: "Clínico Geral", dias: ["terça", "quinta"], horarios: ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"] },
    { id: 3, nome: "Dr. Pedro Santos", especialidade: "Clínico Geral", dias: ["segunda", "quarta", "sexta"], horarios: ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"] },
    { id: 4, nome: "Dr. Carlos Souza", especialidade: "Cardiologia", dias: ["terça", "quinta"], horarios: ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30"] },
    { id: 5, nome: "Dra. Beatriz Lima", especialidade: "Cardiologia", dias: ["segunda", "quarta", "sexta"], horarios: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"] },
    { id: 6, nome: "Dr. Ricardo Alves", especialidade: "Cardiologia", dias: ["terça", "quinta"], horarios: ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"] },
    { id: 7, nome: "Dra. Mariana Rocha", especialidade: "Dermatologia", dias: ["segunda", "quarta"], horarios: ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"] },
    { id: 8, nome: "Dr. Fernando Dias", especialidade: "Dermatologia", dias: ["terça", "quinta"], horarios: ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"] },
    { id: 9, nome: "Dra. Juliana Mendes", especialidade: "Dermatologia", dias: ["sexta"], horarios: ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"] },
    { id: 10, nome: "Dra. Maria Santos", especialidade: "Pediatria", dias: ["terça", "quinta", "sexta"], horarios: ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"] },
    { id: 11, nome: "Dr. Lucas Barbosa", especialidade: "Pediatria", dias: ["segunda", "quarta", "sexta"], horarios: ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"] },
    { id: 12, nome: "Dra. Camila Oliveira", especialidade: "Pediatria", dias: ["terça", "quinta"], horarios: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"] },
    { id: 13, nome: "Dra. Patricia Ferreira", especialidade: "Ginecologia", dias: ["segunda", "quarta"], horarios: ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"] },
    { id: 14, nome: "Dra. Roberta Gomes", especialidade: "Ginecologia", dias: ["terça", "quinta", "sexta"], horarios: ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"] },
    { id: 15, nome: "Dra. Sandra Reis", especialidade: "Ginecologia", dias: ["segunda", "quarta"], horarios: ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"] },
    { id: 16, nome: "Psic. Amanda Silva", especialidade: "Psicologia", dias: ["terça", "quinta"], horarios: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"] },
    { id: 17, nome: "Psic. Rafael Nunes", especialidade: "Psicologia", dias: ["segunda", "quarta", "sexta"], horarios: ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"] },
    { id: 18, nome: "Psic. Larissa Castro", especialidade: "Psicologia", dias: ["terça", "quinta"], horarios: ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30"] },
    { id: 19, nome: "Nutri. Gabriela Torres", especialidade: "Nutrição", dias: ["sexta"], horarios: ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"] },
    { id: 20, nome: "Nutri. Marcos Paulo", especialidade: "Nutrição", dias: ["quarta"], horarios: ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"] },
    { id: 21, nome: "Nutri. Daniela Souza", especialidade: "Nutrição", dias: ["segunda", "quinta"], horarios: ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"] },
  ];

  const handleEspecialidadeChange = (especialidade: string) => {
    if (especialidade) {
      const filtered = medicos.filter(m => m.especialidade === especialidade);
      setMedicosFiltrados(filtered);
    } else {
      setMedicosFiltrados([]);
    }
    setHorariosDisponiveis([]);
  };

  const handleMedicoChange = (medicoId: string) => {
    const medico = medicos.find(m => m.id === parseInt(medicoId));
    if (medico) {
      setHorariosDisponiveis(medico.horarios);
    }
    setFormData({ ...formData, medico: medicoId, time: "" });
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      setFormData({ ...formData, cpf: value });
    }
  };

  const handleOutraPessoaCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      setFormData({ ...formData, outraPessoaCPF: value });
    }
  };

  const handleCartaoSUSChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 15) {
      value = value.replace(/(\d{3})(\d)/, '$1 $2');
      value = value.replace(/(\d{4})(\d)/, '$1 $2');
      value = value.replace(/(\d{4})(\d)/, '$1 $2');
      setFormData({ ...formData, cartaoSUS: value });
    }
  };

  const handleOutraPessoaCartaoSUSChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 15) {
      value = value.replace(/(\d{3})(\d)/, '$1 $2');
      value = value.replace(/(\d{4})(\d)/, '$1 $2');
      value = value.replace(/(\d{4})(\d)/, '$1 $2');
      setFormData({ ...formData, outraPessoaCartaoSUS: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.cpf || !formData.cartaoSUS || !formData.especialidade || !formData.medico || !formData.date || !formData.time) {
      alert("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    if (formData.paraQuem === "outra") {
      if (!formData.outraPessoaNome || !formData.outraPessoaCPF || !formData.outraPessoaCartaoSUS || !formData.parentesco) {
        alert("Por favor, preencha todos os dados da outra pessoa");
        return;
      }
    }

    const cpfLimpo = formData.cpf.replace(/\D/g, '');
    if (cpfLimpo.length !== 11) {
      alert("CPF inválido. Digite 11 dígitos.");
      return;
    }

    const cartaoSUSLimpo = formData.cartaoSUS.replace(/\D/g, '');
    if (cartaoSUSLimpo.length !== 15) {
      alert("Cartão do SUS inválido. Digite 15 dígitos.");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      ...formData,
      medicoNome: medicos.find(m => m.id === parseInt(formData.medico))?.nome,
      appointmentType: 'telemedicina',
      createdAt: new Date().toISOString(),
    };

    const savedAppointments = JSON.parse(localStorage.getItem("telemedicina") || "[]");
    savedAppointments.push(newAppointment);
    localStorage.setItem("telemedicina", JSON.stringify(savedAppointments));

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    setFormData({
      name: "",
      cpf: "",
      cartaoSUS: "",
      paraQuem: "proprio",
      outraPessoaNome: "",
      outraPessoaCPF: "",
      outraPessoaCartaoSUS: "",
      parentesco: "",
      especialidade: "",
      medico: "",
      date: "",
      time: "",
    });
    setMedicosFiltrados([]);
    setHorariosDisponiveis([]);
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #B8E5F5 0%, #B8E5F5 10%, #F5DEB3 100%)' }}>
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-8 sm:pt-28 sm:pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg mb-4">
              <Video className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Telemedicina</h1>
            <p className="text-lg text-gray-600">Consulta médica por videochamada</p>
          </div>
          {showSuccess && (
            <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                <p className="text-green-800 font-medium">Telemedicina agendada com sucesso!</p>
              </div>
            </div>
          )}
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
              <Video className="h-5 w-5" />Como funciona?
            </h3>
            <ul className="text-sm text-green-800 space-y-2">
              <li>• Consulta realizada por videochamada</li>
              <li>• Você receberá um link por email/SMS antes da consulta</li>
              <li>• Certifique-se de ter uma boa conexão de internet</li>
              <li>• Use smartphone, tablet ou computador com câmera</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Video className="h-6 w-6" />Agendar Consulta Online
              </h2>
            </div>
            <div className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input type="text" placeholder="Digite seu nome completo" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">CPF *</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input type="text" placeholder="000.000.000-00" value={formData.cpf} onChange={handleCpfChange} maxLength={14} className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Cartão do SUS *</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input type="text" placeholder="000 0000 0000 0000" value={formData.cartaoSUS} onChange={handleCartaoSUSChange} maxLength={18} className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base" required />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Esta consulta é para: *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="paraQuem" value="proprio" checked={formData.paraQuem === "proprio"} onChange={(e) => setFormData({ ...formData, paraQuem: e.target.value })} className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">Você mesmo(a)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="paraQuem" value="outra" checked={formData.paraQuem === "outra"} onChange={(e) => setFormData({ ...formData, paraQuem: e.target.value })} className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">Outra pessoa</span>
                    </label>
                  </div>
                </div>
                {formData.paraQuem === "outra" && (
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <UsersIcon className="h-5 w-5 text-blue-600" />
                      <h3 className="font-semibold text-blue-900">Dados da outra pessoa</h3>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo *</label>
                      <input type="text" placeholder="Nome completo" value={formData.outraPessoaNome} onChange={(e) => setFormData({ ...formData, outraPessoaNome: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base" required={formData.paraQuem === "outra"} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">CPF *</label>
                        <input type="text" placeholder="000.000.000-00" value={formData.outraPessoaCPF} onChange={handleOutraPessoaCpfChange} maxLength={14} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base" required={formData.paraQuem === "outra"} />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Cartão do SUS *</label>
                        <input type="text" placeholder="000 0000 0000 0000" value={formData.outraPessoaCartaoSUS} onChange={handleOutraPessoaCartaoSUSChange} maxLength={18} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base" required={formData.paraQuem === "outra"} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Parentesco *</label>
                      <select value={formData.parentesco} onChange={(e) => setFormData({ ...formData, parentesco: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base" required={formData.paraQuem === "outra"}>
                        <option value="">Selecione o parentesco</option>
                        {parentescoList.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Especialidade *</label>
                  <select value={formData.especialidade} onChange={(e) => { const novaEspecialidade = e.target.value; setFormData({ ...formData, especialidade: novaEspecialidade, medico: "", date: "", time: "" }); handleEspecialidadeChange(novaEspecialidade); }} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base" required>
                    <option value="">Selecione a especialidade</option>
                    <option value="Clínico Geral">Clínico Geral</option>
                    <option value="Cardiologia">Cardiologia</option>
                    <option value="Dermatologia">Dermatologia</option>
                    <option value="Pediatria">Pediatria</option>
                    <option value="Ginecologia">Ginecologia</option>
                    <option value="Psicologia">Psicologia</option>
                    <option value="Nutrição">Nutrição</option>
                  </select>
                </div>
                {medicosFiltrados.length > 0 && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Médico(a) *</label>
                    <select value={formData.medico} onChange={(e) => handleMedicoChange(e.target.value)} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base" required>
                      <option value="">Selecione o(a) médico(a)</option>
                      {medicosFiltrados.map((med) => <option key={med.id} value={med.id}>{med.nome} - Atende: {med.dias.join(", ")}</option>)}
                    </select>
                  </div>
                )}
                {formData.medico && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Data *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} min={new Date().toISOString().split('T')[0]} className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Horário Disponível *</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <select value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-gray-900 text-base" required>
                          <option value="">Selecione o horário</option>
                          {horariosDisponiveis.map((horario) => <option key={horario} value={horario}>{horario}</option>)}
                        </select>
                      </div>
                    </div>
                  </>
                )}
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg py-4">
                  <Video className="mr-2 h-5 w-5" />Confirmar Agendamento
                </Button>
              </form>
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