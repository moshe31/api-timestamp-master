## Introduction
---
Based on a challenge of **Free Code Camp's:** [API Project - Time Stamp Microservice.](https://curse-arrow.glitch.me/)

*   API requires ISO-8601 compliant date string (e.g. **"2018-09-12"**) and returns JSON in following format:

`{"unix": 1536736210866,"utc":"Wed, 12 Sep 2018 07:10:10 GMT"}`

## Overview
---
*   The API endpoint is `GET /api/timestamp/:date_string?` e.g. `GET /api/timestamp/2018-09-12`
*   If the date string is **empty** API returns current timestamp. `GET /api/timestamp/`
*   If the date string is **valid** the api returns a JSON having the structure  
    `{"unix": <timestamp>, "utc" : <date> }`  
    e.g. `{"unix": 1536736210866,"utc":"Wed, 12 Sep 2018 07:10:10 GMT"}`
*   If the date string is **invalid** the api returns a JSON having the structure  
    `{"error" : "Invalid Date" }`.

## Usage
---

### Install

Clone the repo then
`npm install`
`npm start`

Open browser and type in
`localhost:5000/`

### Example Usage:

*   [https://timestampjson.glitch.me/api/timestamp/2015-12-25](https://timestampjson.glitch.me/api/timestamp/2015-12-25)
*   [https://timestampjson.glitch.me/api/timestamp/1450137600](https://timestampjson.glitch.me/api/timestamp/1450137600000)

### Example Output:

`{"unix": 1536736210866, "utc": "Wed, 12 Sep 2018 07:10:10 GMT"}`