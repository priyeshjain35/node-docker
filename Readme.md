Disclaimer:
===========
This project has been created for learning devops using docker. For references please checkout the last section.


Usefull commands:

command to create image, volume and execute/run container:
=========================================================
development: docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
production: docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build
no-dependecies: docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --no-deps node-app

listing docker images:
=====================
docker image ls

Volumes:
=======
listing: docker volume ls
deleting: docker volume prune
help: docker volume --help

Container:
========
listing: docker ps
exec: to connect to a container
    cmd: docker exec -it <container_name> <command_line_tool>
    example: docker exec -it node-docker_node-app_1 bash

Mongo DB:
========
exec: to connect to DB Container
    cmd: docker exec -it <containe_name> mongo -u <root_username> -p <root_password>
    example: docker exec -it node-docker_mongo_1 mongo -u "priyesh" -p "priyesh"

listing: after successfull exec
    cmd: show dbs

Create & Connecting to DB: use <db_name>
    exmple: use mydb

Insert: <db_name>.<entity>.insert(<data_object>)
    example: mydb.books.insert({"name": "Shiva"})

find: list out data db.<entity>.find()
    example: db.books.find()

Networks:
========
listing: docker network ls

Inspect: docker network inspect <network_name>
    example: docker network inspect node-docker_default

Redis:
=====
Redis-cli: docker exec -it <redis_container> redis-cli
    example: docker exec -it node-docker_redis_1 redis-cli
listing: all available sessions: KEYS *
         Details of one session: GET <key>



References:
==========
This project is created by watching Youtube video, provided by freeCodeCamp.org channel.
Creator: Sanjeev Thiyagarajan
Creator's Channel: https://www.youtube.com/channel/UC2sYgV-NV6S5_-pqLGChoNQ
Video Link: https://www.youtube.com/watch?v=9zUHg7xjIqQ&t=26s
Creator's Github: https://github.com/Sanjeev-Thiyagarajan/node-docker
FreeCodeCamp's Github: https://github.com/freeCodeCamp

©Sanjeev Thiyagrajan or ©freeCodeCamp.org
A ton of Thanks to Sanjeev & freeCodeCamp.