# Rotas para utilizar a API
<br>
## A API não possui banco de dados, a próxima versão possui esta feature.
<br>
<br>

> POST - https://api-recados-zydr.onrender.com/user --> Criação de usuário
```

curl --location 'https://api-recados-zydr.onrender.com/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Adriano",
    "email": "adriano@example.com",
    "password": "123123",
    "repassword": "123123"
}'

```


> POST - https://api-recados-zydr.onrender.com/user/login --> Login
```

curl --location 'https://api-recados-zydr.onrender.com/user/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "adriano@example.com",
    "password": "123123"
}'

```


> GET - https://api-recados-zydr.onrender.com/user/:id --> Buscar usuário por ID (trocar ":id" pelo ID do usuário que é obtido ao fazer login)
```

curl --location --request POST 'https://api-recados-zydr.onrender.com/user/:id' \
--header 'Content-Type: application/json'

```

> POST - https://api-recados-zydr.onrender.com/user/:id/notes --> Criar nota (trocar ":id" pelo ID do usuário que é obtido ao fazer login)
```

curl --location 'https://api-recados-zydr.onrender.com/user/:id/notes' \
--header 'Content-Type: application/json' \
--data '{
    "detail": "Detalhamento",
    "description": "descrição"
}'

```

> GET - https://api-recados-zydr.onrender.com/user/:id/notes --> Buscar notas do usuário (trocar ":id" pelo ID do usuário que é obtido ao fazer login)
```

curl --location 'https://api-recados-zydr.onrender.com/user/:id/notes' \
--header 'Content-Type: application/json'

```

> PUT - https://api-recados-zydr.onrender.com/user/:id/notes/:id --> Editar notas do usuário (trocar ":id" pelo ID do usuário que é obtido ao fazer login e segundo :id pelo id da nota)
```

curl --location --request PUT 'http://localhost:3333/user/3c38450d-3848-43aa-9f0c-13d6c3b0175f/notes/993330e3-e693-4d6f-a797-700b0f08bfb2' \
--header 'Content-Type: application/json' \
--data '{
    "detail": "Detalhamento editado b2",
    "description": "descrição editado b2"
}'

```

> DELETE - https://api-recados-zydr.onrender.com/user/:id/notes/:id --> Deletar notas do usuário (trocar ":id" pelo ID do usuário que é obtido ao fazer login e segundo :id pelo id da nota)
```

curl --location --request DELETE 'http://localhost:3333/user/3c38450d-3848-43aa-9f0c-13d6c3b0175f/notes/993330e3-e693-4d6f-a797-700b0f08bfb2' \
--header 'Content-Type: application/json'

```

