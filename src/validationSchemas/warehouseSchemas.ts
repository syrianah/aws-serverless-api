import { z } from "zod";

export const addGoodsSchema = z.object({
  body: z.object({
    warehouseId: z.string().length(3),
    orderId: z.string().length(6),
    sheetId: z.string().length(6),
    process: z.string(),
  }),
});
