# express-api-auth-knex
Boilerplate for api with sessions, knex and passport auth

# API

## USER
POST   /user/
GET    /user/:id/
PATCH  /user/:id/
DELETE /user/:id/

## POST
POST   /post/
GET    /post/:id/
PATCH  /post/:id/
DELETE /post/:id/

# DB SCHEME

## USER
id
name
fb
vk
email
lastVisitDate
regDate
userpic
role

## POST
id
user_id
title
descr