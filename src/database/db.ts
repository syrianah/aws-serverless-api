import * as AWS from "aws-sdk";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

const createDynamoDBClient = (): DocumentClient => {
  if (process.env.IS_OFFLINE) {
    return new AWS.DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: "http://localhost:5000",
      accessKeyId: "AKIA24LXWDLCCPE4LAED",
      secretAccessKey: "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",
    });
  }

  return new AWS.DynamoDB.DocumentClient();
};

export default createDynamoDBClient;
