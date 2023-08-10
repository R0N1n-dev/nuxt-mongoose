import { GameSchema } from "../../models/game.schema";
export default defineEventHandler(async (event) => {
  if (event.node.req.method === "POST") {
    try {
      const body = await readBody(event);
      const game = await GameSchema.insertOne({
        title: body.title,
        developer: body.developer,
        publisher: body.publisher,
      });
      console.log("Game added", `${game.title}`);
      return { success: true };
    } catch (error) {
      console.log(error.mesage);
    }
  }
});
