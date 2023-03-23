import schemas from "./schemas.js";
import paths from "./paths/index.js";

export default {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Swagger API",
    description: "This is an API to call HTTP methods and alter data",
    license: {
      name: "Artevelde University College Ghent",
      url: "https://www.arteveldehogeschool.be/",
    },
  },
  servers: [
    {
      url: "http://localhost:4000",
      description: "Development server",
    },
  ],
  tags: [],
  paths: {
    ...paths,
  },
  components: {
    schemas,
  },
};
