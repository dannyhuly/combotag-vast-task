## Description

### Technologies
* [Nest](https://github.com/nestjs/nest)
  
## Prerequisites
* NodeJs v8.9.4 (NPM 5.6.0)
* MySql Server

## Installation

In the project root directory run the following command

```bash
$ npm install
```

## Commands
> All the following command need to be issued relative to the project root directory.

### Start

```bash
$ npm run start
```

## HTTP API

### fetch VAST

Request:
url GET `/fetch_vast?id={number}`

Response:
> VAST XML file

### Create VAST

Request:

url: POST `/create_vast`

body:
```
{
	"vast_url": <string | url>,
	"position": <top_left|top_middle|top_right|middle_left|middle_right|bottom_left|bottom_middle|bottom_right>",
	"hide_ui": <boolean>
}
```

Response:
> None