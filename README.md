# express-api-auth-knex

Boilerplate for api with sessions, knex and passport auth

# API

## USER

POST /users/
GET /users/
GET /users/:id/
PATCH /users/:id/
DELETE /users/:id/

## POST

POST /posts/
GET /posts/
GET /posts/:id/
PATCH /posts/:id/
DELETE /posts/:id/

# DB SCHEME

## USER

id
username
display_name
facebook_id
vk_id
email
last_visit_date
reg_date
userpic_path
role

## POST

id
user_id
title
descr
