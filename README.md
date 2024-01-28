# RESTAPI 🔥 user auth system 🧑‍🦰 🔒

This project is an implementation of a simple user authentication system that allows users to log in, and retrieve information. By using nodejs as runtime and expressjs framework

## what is learned :book: 

- #### Token based with jwt
- #### Request limit
- #### Data encryption
- #### Database Posgresql


## Tech Used

<image src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
<image src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<image src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />

## instalation 🚀

clone this project
``` bash
  git clone https://github.com/Alamabd/user-auth-system
```

Install package modules or dependencies
```bash
  npm i
```

### Configure
| host      | port   | Database|
|-----------|--------|---------|
| localhost | 3000   | DBuser|
|||DBhost|
|||DBdatabase|
|||DBpassword|
|||DBport|

If you want to change, edit the .env file

### database table
| name | data type | not null | primary key |
|--- | --- | --- | --- |
| id | integer | yes | yes |
| username | text | | |
| password | text | | |

## Usage 📝

| Method| Url| Body | Params |
|---|---|---|---|
| POST | /registration | username: string <br/> password: string | - |
| POST | /login | username: string <br/> password: string | - |
| GET | /data | - | accesstoken: string |


## Bugs and Issues ⚠️

Have a bug or problem? Open a [new issue here](https://github.com/Alamabd/user-auth-system/issues) on GitHub
