"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Heart, User, CreditCard, MapPin, Phone, Calendar, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    fullName: "",
    cpf: "",
    rg: "",
    dataNascimento: "",
    sexo: "",
    nomeMae: "",
    nomePai: "",
    nacionalidade: "Brasileiro(a)",
    telefone: "",
    email: "",
    cep: "",
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [buscandoCep, setBuscandoCep] = useState(false);

  // Formatar CPF
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      setFormData({ ...formData, cpf: value });
    }
  };

  // Formatar RG
  const handleRgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 9) {
      value = value.replace(/(\d{2})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1})$/, '$1-$2');
      setFormData({ ...formData, rg: value });
    }
  };

  // Formatar Telefone
  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      value = value.replace(/(\d{2})(\d)/, '($1) $2');
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
      setFormData({ ...formData, telefone: value });
    }
  };

  // Formatar CEP
  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 8) {
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
      setFormData({ ...formData, cep: value });
    }
  };

  // Buscar CEP na API ViaCEP
  const buscarCep = async () => {
    const cepLimpo = formData.cep.replace(/\D/g, '');
    
    if (cepLimpo.length !== 8) {
      alert("CEP inválido. Digite 8 dígitos.");
      return;
    }

    setBuscandoCep(true);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const data = await response.json();

      if (data.erro) {
        alert("CEP não encontrado.");
        setBuscandoCep(false);
        return;
      }

      // Preencher campos automaticamente
      setFormData({
        ...formData,
        rua: data.logradouro || "",
        bairro: data.bairro || "",
        cidade: data.localidade || "",
        estado: data.uf || "",
      });

      setBuscandoCep(false);
    } catch (error) {
      alert("Erro ao buscar CEP. Tente novamente.");
      setBuscandoCep(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validações
    if (!formData.fullName || !formData.cpf || !formData.dataNascimento || !formData.sexo || 
        !formData.nomeMae || !formData.telefone || !formData.email || !formData.cep || 
        !formData.rua || !formData.numero || !formData.password || !formData.confirmPassword) {
      alert("Por favor, preencha todos os campos obrigatórios (*)");
      return;
    }

    // Validar CPF
    const cpfLimpo = formData.cpf.replace(/\D/g, '');
    if (cpfLimpo.length !== 11) {
      alert("CPF inválido. Digite 11 dígitos.");
      return;
    }

    // Validar senha
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    if (formData.password.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres");
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Email inválido");
      return;
    }

    // Verificar se email já existe
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const emailExists = users.some((u: any) => u.email === formData.email);
    const cpfExists = users.some((u: any) => u.cpf === formData.cpf);

    if (emailExists) {
      alert("Este email já está cadastrado");
      return;
    }

    if (cpfExists) {
      alert("Este CPF já está cadastrado");
      return;
    }

    // Criar novo usuário
    const newUser = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #B8E5F5 0%, #B8E5F5 10%, #F5DEB3 100%)' }}>
      <Navbar />
      
      <div className="flex items-center justify-center px-4 py-8 pt-24 sm:pt-28">
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Criar Conta
              </h1>
              <p className="text-cyan-50">
                Preencha seus dados para acessar os serviços de saúde
              </p>
            </div>

            {/* Form */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* SEÇÃO: DADOS PESSOAIS */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-cyan-200">
                    Dados Pessoais
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Nome Completo */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Seu nome completo"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                          required
                        />
                      </div>
                    </div>

                    {/* CPF */}
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
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                          required
                        />
                      </div>
                    </div>

                    {/* RG */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        RG
                      </label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="00.000.000-0"
                          value={formData.rg}
                          onChange={handleRgChange}
                          maxLength={12}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                        />
                      </div>
                    </div>

                    {/* Data de Nascimento */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Data de Nascimento *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="date"
                          value={formData.dataNascimento}
                          onChange={(e) => setFormData({ ...formData, dataNascimento: e.target.value })}
                          max={new Date().toISOString().split('T')[0]}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                          required
                        />
                      </div>
                    </div>

                    {/* Sexo */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Sexo *
                      </label>
                      <select
                        value={formData.sexo}
                        onChange={(e) => setFormData({ ...formData, sexo: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                        required
                      >
                        <option value="">Selecione</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                        <option value="outro">Prefiro não informar</option>
                      </select>
                    </div>

                    {/* Nome da Mãe */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome da Mãe *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Nome completo da mãe"
                          value={formData.nomeMae}
                          onChange={(e) => setFormData({ ...formData, nomeMae: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                          required
                        />
                      </div>
                    </div>

                    {/* Nome do Pai */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome do Pai
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Nome completo do pai (opcional)"
                          value={formData.nomePai}
                          onChange={(e) => setFormData({ ...formData, nomePai: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                        />
                      </div>
                    </div>

                    {/* Nacionalidade */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nacionalidade *
                      </label>
                      <select
                        value={formData.nacionalidade}
                        onChange={(e) => setFormData({ ...formData, nacionalidade: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                        required
                      >
                        <option value="Brasileiro(a)">Brasileiro(a)</option>
                        <option value="Estrangeiro(a)">Estrangeiro(a)</option>
                      </select>
                    </div>

                    {/* Telefone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefone/Celular *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="(00) 00000-0000"
                          value={formData.telefone}
                          onChange={handleTelefoneChange}
                          maxLength={15}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* SEÇÃO: ENDEREÇO */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-cyan-200">
                    Endereço
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* CEP com botão de busca */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        CEP *
                      </label>
                      <div className="flex gap-2">
                        <div className="relative flex-grow">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            placeholder="00000-000"
                            value={formData.cep}
                            onChange={handleCepChange}
                            maxLength={9}
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                            required
                          />
                        </div>
                        <button
                          type="button"
                          onClick={buscarCep}
                          disabled={buscandoCep}
                          className="px-4 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors disabled:bg-gray-400"
                        >
                          {buscandoCep ? "Buscando..." : "Buscar"}
                        </button>
                      </div>
                    </div>

                    {/* Estado */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Estado *
                      </label>
                      <input
                        type="text"
                        placeholder="UF"
                        value={formData.estado}
                        onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                        maxLength={2}
                        required
                      />
                    </div>

                    {/* Cidade */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Cidade *
                      </label>
                      <input
                        type="text"
                        placeholder="Sua cidade"
                        value={formData.cidade}
                        onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                        required
                      />
                    </div>

                    {/* Bairro */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Bairro *
                      </label>
                      <input
                        type="text"
                        placeholder="Seu bairro"
                        value={formData.bairro}
                        onChange={(e) => setFormData({ ...formData, bairro: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                        required
                      />
                    </div>

                    {/* Rua */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Rua/Avenida *
                      </label>
                      <div className="relative">
                        <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Nome da rua"
                          value={formData.rua}
                          onChange={(e) => setFormData({ ...formData, rua: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                          required
                        />
                      </div>
                    </div>

                    {/* Número */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Número *
                      </label>
                      <input
                        type="text"
                        placeholder="Nº"
                        value={formData.numero}
                        onChange={(e) => setFormData({ ...formData, numero: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                        required
                      />
                    </div>

                    {/* Complemento */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Complemento
                      </label>
                      <input
                        type="text"
                        placeholder="Apto, bloco, etc (opcional)"
                        value={formData.complemento}
                        onChange={(e) => setFormData({ ...formData, complemento: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                      />
                    </div>
                  </div>
                </div>

                {/* SEÇÃO: CREDENCIAIS */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-cyan-200">
                    Dados de Acesso
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                          required
                        />
                      </div>
                    </div>

                    {/* Senha */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Senha *
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Mínimo 6 caracteres"
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Confirmar Senha */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Confirmar Senha *
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Digite a senha novamente"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                          className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-gray-900 text-base"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white text-lg py-4 mt-6"
                >
                  Criar Conta
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Já tem uma conta?</span>
                </div>
              </div>

              {/* Login Link */}
              <Link href="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-cyan-300 text-cyan-700 hover:bg-cyan-50"
                >
                  Fazer Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Info Text */}
          <p className="text-center text-sm text-gray-700 mt-6">
            Ao criar uma conta, você concorda com nossos{" "}
            <a href="#" className="text-cyan-600 hover:text-cyan-700 font-medium">
              Termos de Uso
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}