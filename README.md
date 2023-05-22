# frontend-reactjs


- O QUE É REACT?

  - React é uma biblioteca de JavaScript declarativa e flexível, utilizada para criar interfaces de usuário. É de código aberto, gratuita, e mantida pelo Facebook e uma comunidade de desenvolvedores e empresas individuais.
  - Ele pode ser utilizado para desenvolver aplicações móveis ou de página única, conhecidas como SPA (Single Page Applications).

- FERRAMENTAS PARA TRABALHAR COM REACT
  - NODE.JS - biblioteca que permite executar código JavaScript do lado do servidor. Necessário ter node instalado paa criar e executar um projeto React desde o início.
  - NPM - É um registro publico e gratuito de codigo JavaScript e, também, um gerenciador de pacotes para node. Permite que seja instalado dependencias necessárias para a criação e execução do projeto React.
  - YARN - É uma alternativa ao npm, que pode ser utilizada como substituta para gerenciar nossas dependencias.
  - WEBPACK - É uma ferramenta conhecida como “module bundler’. É responsável pela transpilação do código que iremos escrever dentro do nosso projeto, a fim de gerar os módulos necessários (bundles), compactando, minimizando e otimizando o nosso código para levá-lo à produção. Embora o Webpack seja uma alternativa mais conhecida ao se trabalhar com o React, existem outras alternativas, como o Vite.
  - BABEL - Esta ferramenta permite converter código JavaScript escrito seguindo especificações ECMAScript 2015 em diante, para um código que seja compatível em diferentes navegadores. 
  
  
  
  
  - JSX COM REACT

    - JSX ou “JavaScript XML'' é uma extensão da sintaxe de JavaScript, ou seja, ele permite escrever JavaScript de forma diferente à forma padrão.
    - JSX não é um requisito para o uso de React, porém, o uso desta sintaxe é muito conveniente uma vez que (e é esta a sua principal vantagem) permite escrever HTML diretamente dentro do código JavaScript.
    - A comunidade de desenvolvedores que trabalha com React prefere o uso de JSX ao inves de CreateElement.




- CRIAÇÃO TEMPLATES REACT
  - Create React App - Criado pelo Facebook (criador também do React) e com anos de experiência no mercado.
      - CRA permite inicializar um projeto do React em apenas alguns minutos. A sua finalidade é nos possibilitar focar na nossa tarefa enquanto eles realizam a configuração de todas as configurações iniciais. 
      - Algumas das ferramentas pre-configuradas: BABEL, ESLINT, WEBPACK, JEST
      - Para criar o projeto basta ter o Node.Js (com npm) instalado e executar: `npx create-react-app nome-do-projeto` para instalação das dependencias + `npm start` para rodar o projeto.

      
  - Vite - Uma alternativa relativamente “nova” que veio para inovar e suprir algumas das deficiências deixadas pelo CRA (Create React App).
      - O Vite utiliza ferramentas muito diferentes das usadas pelo CRA. As suas finalidades são as mesmas, mas muda o approach. 
      - Features pre-configuradas: ESBUILD, Suporte TypeScript, Suporte Nativo a pre-processadores (less ou sass)
      - HMR (Hot Module Replacement)
      - Para criar o projeto basta termos o Node.js (com npm) instalado e executar `npm create vite`, mudar para o diretorio do projeto `cd nome do projeto`, `npm install`+ `npx run dev` para rodar
      
      
   - Uma opção ao NPM é utilizar o Yarn, no terminal do VsCode digitar `yarn`
      
      
   

