export default {
  User: {
    properties: {
      id: { type: "number" }, // niet integer
      firstname: { type: "string" }, // niet vanchar
      lastname: { type: "string" },
      user_meta: {
        $ref: "#/components/schemas/UserMeta", // # niet vergeten
      },
      role: {
        $ref: "#/components/schemas/Role",
      },
    },
  },
  UserMeta: {
    properties: {
      id: { type: "number" },
      address: { type: "string" },
      zipCode: { type: "string" },
      city: { type: "string" },
    },
  },
  Interest: {
    properties: {
      id: { type: "number" },
      name: { type: "string" },
    },
  },
  Role: {
    properties: {
      id: { type: "number" },
      name: { type: "string", enum: ["admin", "user", "author", "guest"] },
    },
  },
  UserInput: {
    // Idem zoals user maar zonder id
    properties: {
      firstname: { type: "string" }, // niet vanchar
      lastname: { type: "string" },
      user_meta: {
        $ref: "#/components/schemas/UserMeta", // # niet vergeten
      },
      role: {
        $ref: "#/components/schemas/Role",
      },
    },
  },
};
