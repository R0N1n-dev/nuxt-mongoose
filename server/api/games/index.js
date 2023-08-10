import { GameSchema } from "../../models/game.schema";
export default defineEventHandler(async (event) => {
  try {
    return await GameSchema.find({});
  } catch (error) {
    return error;
  }
});
