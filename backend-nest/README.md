# Rodar a aplicação

Execute os comandos:

```bash
docker-compose up
```

Acesse no browser http://localhost:3070/login. Use o arquivo `api.http` para testar o JWT.

# Rodar aplicação em desenvolvimento
```bash
docker-compose -f docker-compose.dev.yaml --env-file .env.development up -d workspace

docker build . -t prod-ms-backend-nest
```
