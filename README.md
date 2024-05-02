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

