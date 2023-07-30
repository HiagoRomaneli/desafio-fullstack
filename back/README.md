# desafio-fullstack

yarn typeorm migration:generate /src/migrations/correçao -d /src/data-source.ts

yarn typeorm migration:run -d src/data-source.ts

ROTAS:

-------------------------LOGIN --------------------------
-> Fazer Login: POST /login

------------------------ CLIENTS ------------------------
-> Criar Client: POST /clients
-> Atualizar Client: PATCH /client/id
-> Listar todos os Clients: GET /clients
-> Listar um Client específico: GET /clients/id
-> Deletar Client: DELETE /clients/id
-> Criar um PDF com a lista de todos os Clients: GET /clients/pdf

------------------------ CONTACTS ------------------------
-> Criar Contact: POST /contact
-> Atualizar Contact: PATCH /contact/id
-> Listar todos os Contacts: GET /contact
-> Listar um Contact específico: GET /contact/id
-> Deletar ClContactient: DELETE /contact/id
