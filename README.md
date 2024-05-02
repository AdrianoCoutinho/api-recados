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

