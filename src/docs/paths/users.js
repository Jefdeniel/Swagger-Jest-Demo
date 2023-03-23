import userResponse from "../responses/userResponse.js";

export default {
  "/users": {
    summary: "CRUD with users",
    description: "Get all users in the database",
    get: {
      tags: ["Users"],
      summary: "Get all users",
      responses: userResponse,
    },

    // DTO - Data Transfer Object

    post: {
      tags: ["Users"],
      summary: "Create a new user",
      responses: userResponse,
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UserInput", // DTO
            },
          },
        },
      },
    },
    put: {
      tags: ["Users"],
      summary: "Update a user",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/User",
            },
          },
        },
      },
    },
  },
  "/users/{id}": {
    summary: "get a user by id",
    description: "Get a user by id",
    get: {
      tags: ["Users"],
      summary: "Get a user by id",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "integer",
            minimum: 1,
          },
          description: "ID of the user to get",
        },
      ],
      responses: userResponse,
    },
    delete: {
      tags: ["Users"],
      summary: "Delete a user by id",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "integer",
            minimum: 1,
          },
          description: "ID of the user to delete",
        },
      ],
      responses: userResponse,
    },
  },
};
