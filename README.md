# 🌱 Agroforte

<div align="center">

**O equilíbrio entre produção agrícola e preservação ambiental**

</div>

---

## 📖 Sobre o Projeto

Agroforte é uma landing page imersiva e moderna que apresenta o conceito de agricultura sustentável e agrofloresta. O projeto demonstra como é possível produzir alimentos de forma consciente, regenerando o solo e preservando a biodiversidade.

Desenvolvido com foco em experiência do usuário, acessibilidade e performance, o site utiliza animações suaves, design responsivo e interatividade para engajar os visitantes na narrativa de um futuro sustentável.

### 🎯 Objetivo

- Educar sobre práticas agrícolas sustentáveis
- Demonstrar o impacto positivo da agrofloresta
- Inspirar ações em prol do meio ambiente
- Promover a conscientização sobre produção consciente

---

## ✨ Features Detalhadas

### 🎨 Design e Interface
- **Paleta de Cores Inspirada na Natureza** - Tons de verde, dourado e creme que remetem à terra e floresta
- **Tipografia Premium** - Combinação de Georgia (títulos serif) e system-ui (corpo sans-serif)
- **Layout Imersivo** - Seções com altura total (full-height) para experiência cinematográfica
- **Grain Effect** - Textura sutil de grão sobre as imagens para estética vintage
- **Marquee Infinito** - Texto em movimento contínuo na hero section com keywords do projeto

### 🚀 Animações e Interatividade
- **Scroll Progress Bar** - Barra de progresso no topo que indica a posição da página
- **Reveal on Scroll** - Elementos aparecem suavemente com fade-up ao entrar na viewport
- **Character Split Animation** - Títulos divididos em caracteres com animação sequencial
- **Parallax Background** - Imagens de fundo com efeito parallax durante o scroll
- **Animated Counters** - Números que contam de 0 até o valor final com easing suave
- **Horizontal Scroll Section** - Seção de práticas com scroll horizontal controlado pelo scroll vertical
- **Lerp Animation** - Interpolação linear para movimentos fluidos do cursor e scroll horizontal
- **Hover Effects** - Estados de hover em botões, cards e links com transições suaves

### ♿ Acessibilidade Avançada
- **Hub de Acessibilidade** - Painel flutuante com controles de acessibilidade
- **Controle de Tamanho de Fonte** - Slider ajustável de 12px a 24px com persistência no localStorage
- **Modo Escuro/Claro** - Alternância de temas com persistência e transições suaves
- **Text-to-Speech (TTS)** - Leitura do conteúdo em português brasileiro usando Web Speech API
  - Controles: Iniciar, Pausar/Continuar, Parar
  - Leitura sequencial de headings e parágrafos
  - Detecção automática de elementos visíveis
- **Suporte a prefers-reduced-motion** - Respeita preferências do usuário para animações reduzidas
- **HTML Semântico** - Estrutura acessível com tags apropriadas (header, nav, main, section, article, footer)
- **ARIA Labels** - Labels descritivos para elementos interativos

### 📱 Responsividade
- **Mobile-First Approach** - Design otimizado para dispositivos móveis
- **Breakpoints Inteligentes** - Adaptado para mobile (<780px), tablet (780-900px) e desktop (>900px)
- **Grid e Flexbox** - Layout moderno que se adapta a diferentes tamanhos de tela
- **Imagens Responsivas** - Background images com cover e posicionamento inteligente
- **Navegação Adaptativa** - Menu simplificado em dispositivos móveis

### 🖱️ Cursor Customizado
- **Cursor Interativo** - Cursor circular com borda dourada que segue o mouse
- **Lerp Smoothing** - Movimento suave com interpolação linear (18% de lerp)
- **Hover States** - Cursor aumenta e muda de cor ao passar sobre elementos interativos
- **Mix Blend Mode** - Efeito de diferença para visibilidade sobre qualquer cor
- **Ocultação em Mobile** - Desativado automaticamente em telas menores que 900px

### 💾 Persistência e Performance
- **LocalStorage Integration** - Preferências do usuário salvas automaticamente
  - Tamanho da fonte
  - Modo escuro
- **Vanilla JavaScript** - Sem dependências externas, performance máxima
- **Intersection Observer API** - Detecção eficiente de elementos na viewport
- **Web Speech API** - API nativa para leitura de texto
- **RequestAnimationFrame** - Animações otimizadas com 60fps
- **Passive Event Listeners** - Scroll otimizado para melhor performance
- **CSS Variables** - Customização eficiente e manutenção simplificada

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização moderna com:
  - CSS Variables
  - Flexbox & Grid
  - Media Queries
  - Custom Properties
  - Backdrop Filter
  - Transform & Transitions
- **JavaScript (Vanilla)** - Interatividade e animações:
  - Intersection Observer API
  - Web Speech API
  - LocalStorage API
  - RequestAnimationFrame
  - Event Listeners

---

## 📂 Estrutura do Projeto

```
Agroforte-Futuro-Sustentavel/
├── img/
│   ├── hero.jpg
│   ├── impacto.jpg
│   ├── praticas1.jpg
│   ├── praticas2.jpg
│   ├── praticas3.jpg
│   ├── praticas4.jpg
│   ├── praticas5.jpg
│   └── sobre.jpg
├── js/
│   └── script.js
├── css/
│   └── styles.css
├── index.html
└── README.md
```

---

## 🎨 Customização

### Cores

As cores são definidas como CSS Variables no arquivo `css/styles.css`:

```css
:root {
  --bg: #0a1a14;        /* Fundo principal */
  --bg-2: #0d2b20;      /* Fundo secundário */
  --green: #064e3b;     /* Verde principal */
  --green-2: #0d7a5f;   /* Verde secundário */
  --gold: #c9a84c;      /* Dourado */
  --gold-soft: #e3c97a; /* Dourado suave */
  --cream: #f5f0e0;     /* Creme */
  --ink: #0a1a14;       /* Tinta */
  --line: rgba(245,240,224,.14); /* Linhas */
}
```

### Fontes

O projeto utiliza fontes nativas do sistema:

- **Georgia** - Títulos serif
- **System-ui** - Texto de corpo e interface

Para alterar, modifique as variáveis:

```css
:root {
  --serif: Georgia, "Times New Roman", Times, serif;
  --sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```

---

## 🌐 Browser Support

| Browser | Versão Mínima |
|---------|---------------|
| Chrome  | 90+           |
| Firefox | 88+           |
| Safari  | 14+           |
| Edge    | 90+           |

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.

---

<div align="center">

**Feito por Scolver**

[⬆ Voltar ao topo](#-agroforte)

</div>
