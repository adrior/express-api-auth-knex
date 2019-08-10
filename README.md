# express-api-auth-knex

Boilerplate for api with sessions, knex and passport auth

# API

## USER

POST /user/
GET /user/:id/
PATCH /user/:id/
DELETE /user/:id/

## POST

POST /post/
GET /post/:id/
PATCH /post/:id/
DELETE /post/:id/

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
