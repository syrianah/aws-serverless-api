import middy from "@middy/core";
import { APIGatewayEvent, Context } from "aws-lambda";
// import createHttpError from "http-errors";
import { AnyZodObject, ZodError, ZodSchema } from "zod";
import formatJSONResponse from "./formatJsonResponse";

export function zodValidator(
  schema: AnyZodObject
): middy.MiddlewareObj<any, any, Error, Context> {
  return {
    before: async (req) => {
      const requestValidation = await schema.safeParseAsync({
        body: req.event.body,
        query: req.event.pathParameters,
      });
      if (requestValidation.success) {
        return;
      }
      return formatJSONResponse(400, requestValidation);
    },
  };
}
