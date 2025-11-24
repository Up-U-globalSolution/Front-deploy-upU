# Up'U - Plataforma de Desenvolvimento de Carreira em TI

## 📖 Sobre o Projeto

Up'U é uma plataforma inovadora que conecta desenvolvedores e profissionais de TI às tendências do mercado de tecnologia. Através de análise de dados e personalização, ajudamos você a traçar sua jornada de aprendizado e manter-se atualizado com as demandas do setor.

### 🎯 Objetivo Principal

Facilitar o desenvolvimento de carreira em TI oferecendo:
- 📊 Análise de tendências de mercado em tempo real
- 🎯 Recomendações personalizadas baseadas em seu perfil
- 🚀 Planos de carreira estruturados e alcançáveis
- 📚 Recursos de aprendizado curados

## 📑 Sumário

1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Status do Projeto](#-status-do-projeto)
3. [Funcionalidades](#-funcionalidades)
4. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
5. [Instalação](#-instalação)
6. [Como Usar](#-como-usar)
7. [Estrutura de Pastas](#-estrutura-de-pastas)
8. [Endpoints ou Rotas Principais](#-endpoints-ou-rotas-principais)
9. [Screenshots / Demonstração](#-screenshots--demonstração)
10. [Contato](#-contato)

---

## ✨ Funcionalidades

### Implementadas
- ✅ Sistema de autenticação completo (login/cadastro)
- ✅ Perfil de usuário com edição de dados
- ✅ Dashboard personalizado
- ✅ FAQ interativo
- ✅ Formulário de contato

### Em Desenvolvimento
- 🔄 Sistema de análise de tendências de mercado
- 🔄 Recomendações personalizadas
- 🔄 Plano de carreira interativo

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca para construção de interfaces
- **TypeScript 5.8.3** - Superset JavaScript com tipagem estática
- **Vite 7.1.2** - Build tool moderno e rápido
- **Tailwind CSS 4.1.13** - Framework CSS utility-first

### Validação
- **React Hook Form 7.66.0** - Gerenciamento de formulários

### Roteamento
- **React Router Dom 7.9.1** - Navegação entre páginas

### Backend Integration
- **API REST** - Comunicação com backend Java/Quarkus
- **Fetch API** - Requisições HTTP nativas

---

## 🚀 Instalação

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn
- Git

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/GabrielFachin/frontGS

# Entre na pasta do projeto
cd Front-End-REACT/FrontGS

# Instale as dependências
npm install

# Execute o projeto em modo desenvolvimento
npm run dev
```
---

## 💻 Como Usar

### Desenvolvimento Local
```bash
npm run dev
```

### Build para Produção
```bash
npm run build
```

### Preview da Build
```bash
npm run preview
```

### Deploy
🌐 **Aplicação em Produção**: [https://seu-projeto.vercel.app](https://seu-projeto.vercel.app)

A aplicação está hospedada na Vercel e atualiza automaticamente a cada push na branch `main`.

---

### Link do repositório

https://github.com/GabrielFachin/frontGS

## 📁 Estrutura de Pastas

```
FrontCH/
├── public/
│   └── assets/
│       └── img/              # Imagens estáticas
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Cabecalho/
│   │   └── Rodape/
│   ├── routes/              # Páginas da aplicação
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── Cadastro/
│   │   ├── Perfil/
│   │   ├── Sobre/
│   │   ├── Integrantes/
│   │   ├── FAQ/
│   │   ├── Contato/
│   │   └── Error/
│   ├── services/            # Serviços de API
│   │   └── api.ts
│   ├── types/               # Definições de tipos TypeScript
│   │   └── auth.ts
│   ├── App.tsx              # Componente raiz
│   └── main.tsx             # Ponto de entrada
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

---

## 🔗 Endpoints ou Rotas Principais

### Rotas Públicas
- `/` - Página inicial
- `/sobre` - Sobre o projeto
- `/integrantes` - Equipe de desenvolvimento
- `/faq` - Perguntas frequentes
- `/faq/:id` - FAQ específica
- `/contato` - Formulário de contato
- `/login` - Autenticação
- `/cadastro` - Registro de novo usuário

### Rotas Privadas (requerem autenticação)
- `/perfil` - Perfil do usuário

### API Backend
Base URL: `https://java-jdbc-zry5.onrender.com`

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/usuario` | Lista todos os usuários |
| POST | `/usuario` | Cadastra novo usuário |
| PUT | `/usuario/{id}` | Atualiza usuário por ID |
| DELETE | `/usuario/{id}` | Remove usuário por ID |



### Equipe de Desenvolvimento

<table>
  <tr>
    <td align="center">
      <sub><b>Gabriel Fachin</b></sub><br>
      <sub>RM: 561551 | 1TDSPW</sub><br>
    </td>
    <td align="center">
      <sub><b>Iago Dias</b></sub><br>
      <sub>RM: 565708 | 1TDSPW</sub><br>
      </a>
    </td>
    <td align="center">
      <sub><b>Fernando Charlles</b></sub><br>
      <sub>RM: 566482 | 1TDSPW</sub><br>
      </a>
      </a>
    </td>
  </tr>
</table>

---

## 📸 Screenshots / Demonstração

### 🎥 Vídeo de Apresentação
https://youtu.be/6_pga649bU4


## 📞 Contato

### Gabriel Fachin
- **RM**: 561551
- **Turma**: 1TDSPW
- **GITHUB**: https://github.com/GabrielFachin

### Iago Dias
- **RM**: 565708
- **Turma**: 1TDSPW
- **GITHUB**: https://github.com/IagoDAinette

### Fernando Charlles
- **RM**: 566482
- **Turma**: 1TDSPW
- **GITHUB**: https://github.com/Sigmachr

---