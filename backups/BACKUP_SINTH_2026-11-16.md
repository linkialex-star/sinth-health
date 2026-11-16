# BACKUP GERAL — SINTH
**Data do registro:** 16/11/2026  
**Projeto:** Sinth — ecossistema modular de tecnologia  
**Repositório principal:** https://github.com/linkialex-star/sinth-health  
**Branch de referência:** `main`  
**Commit de referência:** `69e0c83e72b8f8f6d3bd59b0b0dd9d01f3bf28ef`

> Este documento é um ponto de restauração de contexto e orientação. Ele registra decisões, estado técnico conhecido e instruções para retomar o trabalho. Não substitui um clone/arquivo completo do repositório, nem faz backup automático de projetos externos do Lovable, bancos de dados, arquivos locais ou contas de serviços.

---

## 1. Identidade e visão do projeto

**Sinth** é uma marca/ecossistema modular de tecnologia, concebido para reunir produtos e soluções independentes sob uma estrutura comum. O nome foi associado pelo fundador à ideia de *sinthome* lacaniano.

A estratégia é construir uma base tecnológica que permita lançar módulos progressivamente, sem misturar produtos com públicos e funções diferentes.

Módulos citados no planejamento:
- **Sinth Health** — frente de saúde e primeira prioridade de desenvolvimento.
- **Sinth Psi** — frente de psicologia/serviços psicológicos dentro da Sinth Health.
- **Sinth Truks** — módulo/produto previsto, ainda sem especificação técnica consolidada neste registro.
- **Sinth Uai** — módulo/produto previsto, ainda sem especificação técnica consolidada neste registro.

A Sinth Health é o primeiro eixo a estruturar. A prioridade prática imediata também inclui concluir o site profissional do fundador com integração de agenda e contratação de atendimentos, sem perder a possibilidade de evoluir para uma plataforma maior.

## 2. Estrutura estratégica e organização

- A visão discutida para a sociedade foi de participação **50%/50%** entre o fundador e um parceiro de tecnologia.
- A divisão de papéis mencionada: fundador na direção/CEO e parceiro na responsabilidade de desenvolvimento.
- Como não havia protótipo/entrega técnica suficiente após meses de trabalho, o fundador começou a desenvolver e prototipar diretamente usando Lovable e GitHub.
- Não tratar essa divisão societária como contrato formal ou situação jurídica validada; é o arranjo relatado nas conversas e deve ser formalizado separadamente se necessário.

### Separação de marcas e produtos
Manter distintos:
1. **Alex Corrêa de Souza** — identidade profissional e site do psicólogo.
2. **Sinth Psi** — produto/plataforma voltado à experiência de psicólogos e pacientes.
3. **Sinth Health** — estrutura/ecossistema de saúde que abriga a Sinth Psi.

A plataforma não deve apagar ou confundir a identidade profissional individual com a marca do produto.

## 3. Produto e módulos planejados

Uma arquitetura funcional discutida para a evolução da Sinth inclui:

- **Catálogo / entrada:** apresentar profissionais ou serviços e permitir que o visitante encontre o que procura.
- **Perfil:** cadastro e apresentação do profissional, informações relevantes e configurações.
- **Site:** página pública ou presença digital do profissional.
- **Agenda:** disponibilidade, agendamento e sincronização com Google Calendar.
- **Pay / checkout:** contratação e pagamento integrado, com confirmação do agendamento condicionada à validação do pagamento.
- **Analytics:** indicadores operacionais e visão de desempenho.
- **Admin / portal do paciente:** área autenticada para acompanhar agendamentos e informações pertinentes.

Essa lista é uma proposta de arquitetura e escopo discutida, não uma declaração de que esses módulos já estejam implementados no repositório atual.

### Fluxo de agendamento e pagamento discutido para Sinth Psi
1. Visitante acessa a página e conhece o serviço/profissional.
2. Visitante inicia contato ou seleciona um horário conforme o fluxo definido.
3. A conta do paciente identifica o contratante e permite acompanhar agendamentos.
4. O agendamento fica **pendente** até que o pagamento seja validado.
5. Somente após a confirmação do pagamento o agendamento passa a ser **confirmado/definitivo**.
6. O evento confirmado deve ser sincronizado com o Google Calendar.
7. O sistema deve distinguir estados de pagamento e estados de agendamento, evitando confirmação duplicada ou horário reservado sem pagamento validado.

O desenho final do fluxo, regras de expiração, cancelamento, estorno, reagendamento e conciliação ainda precisa ser especificado e testado.

### Integrações mencionadas
- Google Calendar — agenda e autenticação/integração de eventos.
- Mercado Pago — checkout e confirmação de pagamento.
- WhatsApp — canal de contato/entrada para visitantes, conforme a experiência do produto.
- Lovable — prototipação e desenvolvimento assistido.
- GitHub — versionamento, histórico e colaboração.

Nenhuma credencial, token, chave privada ou segredo deve ser armazenado neste documento ou no Git.

## 4. Requisitos e cuidados não negociáveis

- Projetar privacidade e segurança desde o início.
- Minimizar os dados pessoais coletados e limitar acessos por perfil.
- Não inserir dados reais de pacientes, prontuários, documentos clínicos ou informações identificáveis no repositório.
- Não versionar tokens, senhas, chaves privadas, credenciais de APIs ou arquivos `.env`.
- Considerar LGPD e requisitos profissionais aplicáveis (CFP/CRP) antes de operar com dados reais ou publicar funcionalidades clínicas.
- Separar dados de demonstração dos dados reais.
- Implementar autenticação, autorização e trilhas de auditoria antes de liberar áreas privadas.
- Revisar acessibilidade, responsividade e clareza de interface.
- Fazer mudanças pequenas, documentadas e revisáveis.
- Não considerar um protótipo visual como sistema pronto para uso clínico ou produção.

## 5. Estado técnico do repositório em 16/11/2026

**Repositório:** `linkialex-star/sinth-health`  
**Visibilidade conhecida:** privado  
**Branch:** `main`  
**Commit atual consultado:** `69e0c83e72b8f8f6d3bd59b0b0dd9d01f3bf28ef`

### Stack identificada
- Vite
- React
- TypeScript
- lucide-react
- Node.js 20 no workflow de deploy

### Arquivos presentes no snapshot
```text
.env.example
.github/
  workflows/
    deploy.yml
.gitignore
README.md
docs/
  PROJECT.md
index.html
package.json
src/
  App.tsx
  main.tsx
  styles.css
tsconfig.json
vite.config.ts
```

### Estado real da aplicação
O repositório ainda é um **esqueleto inicial**:
- A tela React atual apresenta uma landing page institucional simples com a mensagem “Saúde conectada. Cuidado com sentido.”.
- Não há, no snapshot consultado, autenticação, cadastro de pacientes, banco de dados, agendamento funcional, checkout, integração com Mercado Pago ou sincronização com Google Calendar.
- A camada de backend e banco de dados ainda não foi definida.
- O atributo `data-github-sync="test"` em `src/App.tsx` foi adicionado como teste de sincronização GitHub.
- O `package.json` usa dependências com versão `latest` e não há `package-lock.json` no snapshot. Para builds reproduzíveis, definir versões e gerar/commitar um lockfile.
- `vite.config.ts` está configurado com `base: "/sinth-health/"`, considerando a publicação pretendida no GitHub Pages.

### Configuração de ambiente
O arquivo `.env.example` contém apenas os nomes:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Isso **não comprova** que Supabase esteja integrado ou configurado. São apenas variáveis exemplificadas. Nunca colocar credenciais reais no Git.

### GitHub Pages / preview
Foi criado `.github/workflows/deploy.yml` para:
- executar em push para `main` ou manualmente;
- instalar dependências com `npm install`;
- executar `npm run build`;
- publicar o diretório `dist` no GitHub Pages.

**Atenção:** a existência do workflow não comprova que o GitHub Pages esteja habilitado, que o build tenha passado ou que exista um preview publicado. Na última verificação, a ativação de Pages e o primeiro deploy ainda não estavam confirmados. A URL pretendida, caso a publicação seja habilitada e concluída, é:
`https://linkialex-star.github.io/sinth-health/`

O repositório é privado. Antes de alterar sua visibilidade, avaliar as opções de plano/configuração do GitHub. Não tornar o código público sem autorização explícita do proprietário.

## 6. Histórico técnico importante

Commits conhecidos no histórico recente:
- `68a9dc00bcac9cee063480324e689b7e94cb427e` — alteração de teste em `src/App.tsx` para verificar sincronização GitHub.
- `1557742870115444258d667232a5b9e1de085d56` — configuração do Vite para o caminho do GitHub Pages.
- `69e0c83e72b8f8f6d3bd59b0b0dd9d01f3bf28ef` — ajuste do workflow para remover o cache npm que dependia de lockfile inexistente.

O commit de referência deste backup é o último commit consultado em `main`, em 16/11/2026.

## 7. Como recuperar o projeto

### Recuperar o código
1. Acessar o repositório GitHub: https://github.com/linkialex-star/sinth-health
2. Clonar o repositório ou baixar o ZIP da branch `main`.
3. Instalar Node.js (preferencialmente versão 20 ou compatível).
4. Na pasta do projeto, executar:
   ```bash
   npm install
   npm run dev
   ```
5. Para testar build:
   ```bash
   npm run build
   npm run preview
   ```

### Retomar com Lovable
1. Entrar na conta Lovable correta.
2. Verificar os projetos existentes e a conexão GitHub.
3. Conectar ao repositório `linkialex-star/sinth-health`, se a integração não estiver ativa.
4. Confirmar qual lado contém a versão mais recente antes de sincronizar; evitar sobrescrever alterações.
5. Fazer uma pequena alteração de teste e confirmar o fluxo de sincronização nos dois sentidos.

O histórico e os arquivos do GitHub não garantem recuperação de telas, prompts, assets ou configurações que existam somente no Lovable. Esses itens precisam de exportação/backup próprio.

### Retomar desenvolvimento
Ordem sugerida, sujeita à validação do escopo:
1. Confirmar o objetivo imediato: site profissional integrado ou plataforma Sinth Psi mais ampla.
2. Consolidar requisitos e protótipos existentes no Lovable.
3. Fechar o fluxo de usuário e estados do agendamento/pagamento.
4. Definir backend, banco, autenticação e modelo de permissões.
5. Definir contratos de integração do Google Calendar e Mercado Pago.
6. Implementar primeiro um fluxo mínimo ponta a ponta em ambiente de teste.
7. Testar segurança, privacidade, acessibilidade, responsividade e recuperação de falhas.
8. Só então planejar piloto com usuários reais, após revisão regulatória e operacional.

## 8. O que este backup não contém

Este documento e o repositório consultado não incluem necessariamente:
- exportação integral dos projetos Lovable;
- prompts e histórico de conversas do Lovable;
- imagens, fontes, vídeos e outros assets que não estejam no Git;
- banco de dados ou conteúdo de serviços externos;
- configurações de domínio/DNS;
- credenciais e tokens (que devem permanecer fora do backup versionado);
- contratos societários ou documentos jurídicos;
- dados de pacientes ou prontuários.

Para uma estratégia de recuperação real, manter cópias independentes do GitHub: clone local atualizado e cópia compactada em armazenamento separado. Para projetos externos, exportar também os arquivos e configurações que não estejam sincronizados com o Git.

## 9. Regra de atualização deste documento

Ao retomar ou alterar significativamente a Sinth:
- atualizar a data e o commit de referência;
- registrar o que foi efetivamente implementado e testado;
- listar integrações habilitadas e seus ambientes (desenvolvimento, homologação ou produção);
- registrar pendências e decisões em aberto;
- nunca registrar segredos, dados de pacientes ou credenciais;
- manter backups datados anteriores em vez de sobrescrever o histórico de recuperação.

---
**Descrição curta:** snapshot de contexto, arquitetura planejada, estado técnico, histórico e instruções de retomada da Sinth/Sinth Health em 16 de novembro de 2026.
