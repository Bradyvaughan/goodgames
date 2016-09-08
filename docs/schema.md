# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## games
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
developer_id| integer   | not null, foreign key (references developers), indexed
library_id  | integer   | not null, foreign key (references libraries), indexed
release_date| datetime  | not null, default: false

## libraries
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## genres
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## genrematches
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
game_id     | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
genre_id      | integer   | not null, foreign key (references tags), indexed

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
summary     | string    | not null
body        | text      | not null
game_id     | integer   | not null, foreign key (references games), indexed
