# Trash

An IoT device that introduces a new information stream to households to incentivize sustainable consumption

### Prerequisites

-   Node.js
-   npm
-   MongoDB
-   Redis
-   Arduino

### Environment Variables

Create a `.env` file under `server/` with the following contents

```
PORT=3000
db_connection_url=mongodb://localhost/garbage
```

Create a `constants.h` file under `device/` with the following contents

```c
#define URL "<your web server url>"
#define DEBUG_WIFI_SSID "<your wifi ssid>"
#define DEBUG_WIFI_PASS "<your wifi pass>"
```

Starting the Express server with

```
$ npm run dev
```

will load the environmental variables from `.env` into the process.

### How to Run

Install server packages

```
$ cd server
$ npm i
```

Install client packages

```
$ cd web
$ npm i
```

Start MongoDB

```
$ sudo mongod
```

Start Redis (session cache)

```
$ redis-server
```

Start the Express server

```
$ cd server
$ npm run dev
```

Start the React server

```
$ cd web
$ npm start
```
