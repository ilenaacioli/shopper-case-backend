# shopper-case-backend

A proposta do case é a criação de cadastro de pedidos de um supermercado. Sendo alguns dos requisitos pedidos: 
- O sistema deve ter um formulário de cadastro de pedidos
- O usuário deve entrar com Nome do Cliente, Data de Entrega e uma lista de compras
- A lista de compras é composta por um ou mais produtos e a quantidade solicitada para
cada um deles.
- O usuário pode alterar a quantidade de itens já cadastrados ou excluir um item que ele
não queira mais.
- A cada alteração na lista de compras o sistema deve calcular o valor total do pedido.
- Todas essas informações devem ser salvas em um banco de dados que você vai modelar.
- Cada pedido salvo deve debitar a quantidade do produto correspondente de seu estoque.
- O sistema deve alertar o usuário caso a quantidade solicitada não esteja disponível no
estoque.
- O sistema também deve ter uma função para mostrar o estoque atual exibindo: Nome do
produto e a quantidade em estoque.

---

### Instruções para instalação

#### Instalando as dependências:

-   `npm install`:
    Instala todas as dependências listadas no `package.json`.

#### Criando o arquivo .env:

Será necessário criar o arquivo `.env` e configurar com as informações de seu banco de dados, de acordo com o exemplo abaixo.

```
PORT: 3003
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_NAME = nome-do-banco-de-dados
JWT_KEY = "minha-senha-segura"
JWT_EXPIRES_IN = "24h"
BCRYPT_SALT_ROUNDS = 12
```

#### Populando a tabela:

-   `npm run migrations`
    Cria e popula as tabelas com dados _mockados_ de usuários e shows.
    -   _Esse script deve ser executado apenas uma única vez_
    -   _Se executado uma segunda vez, ele dropa as tabelas e reseta os dados mockados_

#### Executar o projeto:

-   `npm run dev:`
    Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor `localhost` toda a vez que o projeto for alterado e salvo.

---

### Link do Postman
https://documenter.getpostman.com/view/21552877/2s83ziN3Zu

---

### Coverage

![image](https://user-images.githubusercontent.com/104631728/194767264-0540a76f-9959-48bf-9f0b-322ba950b01c.png)


