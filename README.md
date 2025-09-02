# 💰 Banco Pessoal — Sistema de Controle Financeiro

> Um sistema bancário pessoal para gestão de contas, movimentações e relatórios financeiros, desenvolvido para demonstrar boas práticas de arquitetura, organização e escalabilidade.

---

## 📌 Status do Projeto
🚧 Em desenvolvimento — MVP funcional em andamento.

---

## 🛠️ Stack Tecnológica
- **Frontend:** [Next.js](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/)
- **Backend:** Node.js + Prisma
- **Banco de Dados:** MongoDB
- **Hospedagem (futuro):** Vercel (frontend) / Railway ou Render (backend)

---

## ✨ Funcionalidades
- [x] Cadastro e autenticação de usuários
- [x] Dashboard com saldo e últimas movimentações
- [x] Criação de contas e categorias financeiras
- [ ] Transferências entre contas
- [ ] Relatórios mensais e gráficos
- [ ] Exportação de dados em PDF/CSV

---

## 🧱 Arquitetura
```mermaid
graph TD;
  A[Frontend - Next.js] --> B[API Backend - Node.js + Prisma]
  B --> C[(MongoDB Database)]
