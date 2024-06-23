const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    version: "1.0.0", // by default: '1.0.0'
    title: "EQUIPMENT DISTRIBUTION SYSTEM ", // by default: 'REST API'
    description: " EQUIPMENT DISTRIBUTION SYSTEM" // by default: '',
  },
  host: "localhost:5000", // by default: 'localhost:3000'
  basePath: "/", // by default: '/'
  schemes: ["http"], // by default: ['http']
  consumes: ["application/json"], // by default: ['application/json']
  produces: ["application/json"], // by default: ['application/json']
  tags: [],
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "Authorization",
      in: "header"
    }
  },
  definitions: {} // by default: empty object
};

const outputFile = "./swagger-output.json";
const routes = ["./routes/index.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc).then(async () => {
  await require("./index.js"); // Your project's root file
});
