## Comands Utilities

  # App Initialization
    $ yarn install && yarn dev

  # Docker
    -- compose build
    $ docker-compose -f docker-compose.dev.yml --env-file .env.development build workspace
    $ docker-compose -f docker-compose.stage.yml --env-file .env.stage build workspace

    -- compose up
    $ docker-compose -f docker-compose.dev.yml --env-file .env.development up -d workspace
    $ docker-compose -f docker-compose.stage.yml --env-file .env.stage up -d workspace


    -- compose exec
    $ docker-compose exec -it workspace bash
    $ docker exec -it 5cd1145d0a37 bash
    $ docker exec -it 01dev-workspace bash
    $ docker exec -it 01stage-workspace bash

    - compose container stop/start
      $ docker-compose stop workspace
      $ docker-compose start workspace

  # Git
    $ git commit --amend  -m "feat(project) - Initialization Project"
