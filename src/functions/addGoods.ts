import {
  APIGatewayEvent,
  Handler,
  Context,
  APIGatewayProxyResult,
} from "aws-lambda";
import * as uuid from "uuid";
import middify from "../core/middify";
import formatJSONResponse from "../core/formatJsonResponse";
import warehouseService from "../database/services";
import AddGoods from "../dtos/addGoodsDto";
import { zodValidator } from "../core/zod";
import { addGoodsSchema } from "../validationSchemas/warehouseSchemas";

export const handler: Handler = middify(
  async (
    event: APIGatewayEvent & AddGoods,
    context: Context
  ): Promise<APIGatewayProxyResult> => {
    const { warehouseId, orderId, sheetId, process } = event.body;

    try {
      const id: string = uuid.v4();
      const post = await warehouseService.addToWarehouse({
        id,
        warehouseId,
        orderId,
        sheetId,
        process,
        title: "Example",
        warehouseTime: new Date().toISOString(),
      });

      return formatJSONResponse(201, post);
    } catch (err) {
      return formatJSONResponse(400, err);
    }
  }
).use(zodValidator(addGoodsSchema));
