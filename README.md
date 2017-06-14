## Luphole Keep ##

Pre-requirements
-------------

 1. Node js v8.0
 2. MongoDB v3.4.1 and up
 3. MongoDB instance running in localhost:27017

Installation
-------------

 1. Clone the repository
 2. In the root directory, run: 
 `npm install`
 This will install gulp and gulp-connect
 3.  Then move to the `server` folder and run:
 `npm install`
 This will install the dependencies for loopback.
 4. Change the details for the "mongoDs" datasource to match yours in your local machine or add the following user: `admin` with password: `root` to the database: `keep`.
 
 
Execution
-------------
 1. In the `server`, folder run:
 `node .`
 This will start the loopback server at `0.0.0.0:3000`
 2. In the root directory run:
 `npm run dev`
 This will start a webserver at `localhost:8888` where the angular app
 will be running
