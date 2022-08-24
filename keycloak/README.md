![Imersão Full Stack && Full Cycle](https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/grupo_4417.png)

Participe gratuitamente: https://imersao.fullcycle.com.br/

## Sobre o repositório
Esse repositório contém o código-fonte ministrado nas aulas 

* Aplicações Multi-tenancy usando Nest.js e Keycloak: [https://www.youtube.com/watch?v=6vu5SkEMG-w](https://www.youtube.com/watch?v=6vu5SkEMG-w)

* Usando Keycloak para autenticar aplicações Next.js e Nest.js [https://www.youtube.com/watch?v=A3ZItE_sqOA](https://www.youtube.com/watch?v=A3ZItE_sqOA)

## Rodar as aplicações

O Nest.js e Next.js dependem do Keycloak, por isso é necessário subir o Keycloak com o comando `docker-compose up`.

Veja a 1ª primeira aula para configurar corretamente o Keycloak.

Suba depois o Nest.js e depois o Next.js, ambos com o comando `docker-compose up`.

Execute os comandos:

```bash
docker-compose up
```

Acesse no browser http://localhost:3001/login.

// https://www.keycloak.org/getting-started/getting-started-docker


client_id=wagner_castro
&client_secret=d0034603-1b09-492f-bb9f-bd04d58f6198
&grant_type=password
&username=wagner.castro@m2center.com.br
&password=123456

# &grant_type=password #fluxo de autenticacao/authenticacao  // usuario
# &grant_type=client_credential_ #fluxo de autenticacao/authenticacao


-- mac
-- https://www.hostinger.com.br/tutoriais/como-editar-o-arquivo-hosts-no-mac
sudo nano /private/etc/hosts


// windows
// C:\Windows\system32\drivers\etc/hosts