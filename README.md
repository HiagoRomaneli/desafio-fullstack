# Desafio Fullstack - README 


------------------- Funcionalidades Principais -------------------

A aplicação possui as seguintes funcionalidades principais:

Autenticação de Clientes: Os clientes podem se cadastrar e fazer login no sistema para acessar seus contatos.

Gerenciamento de Contatos: Os clientes podem criar novos contatos, visualizar os contatos existentes, atualizar e excluir contatos.

------------------- Back-End -------------------

1 - Clone este repositório para o seu ambiente local:

    git clone git@github.com:HiagoRomaneli/desafio-fullstack.git
    
2 - Navegue até o diretório Back-End pelo terminal:
3 - Instale as dependências do Node.js executando o seguinte comando:

      yarn install
      
4 - No arquivo .env.example esta descrito como seu arquivo .env deve ser construido, 
preencha seu arquivo .env com as variáveis de acordo com suas configurações locais:
5 - Rode as migrações executando os seguintes comandos:

      yarn typeorm migration:generate /src/migrations/correçao -d /src/data-source.ts

      yarn typeorm migration:run -d src/data-source.ts
      
6 - Inicie o servidor com o seguinte comando:

      yarn dev

------------------- Front-End -------------------

1 - Navegue até o diretório Front-End pelo terminal:
2 - Instale as dependências do Node.js executando o seguinte comando:

      yarn install
      
3 - Inicie o servidor com o seguinte comando:

      yarn dev
