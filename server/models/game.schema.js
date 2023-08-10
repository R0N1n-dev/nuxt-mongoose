import { defineMongooseModel } from "#nuxt/mongoose";
export const GameSchema = defineMongooseModel({
  name: "GameSchema",
  schema: {
    title: {
      type: "string",
      required: true,
    },
    developer: {
      type: "string",
      required: true,
    },
    publisher: {
      type: "string",
      required: true,
    },
  },
});
