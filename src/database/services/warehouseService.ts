import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { Warehouse } from "../../models/Warehouse";

class WarehouseService {
  constructor(
    private readonly docClient: DocumentClient,
    private readonly tableName: string
  ) {}

  async getWarehouse(): Promise<Warehouse[]> {
    const result = await this.docClient
      .scan({
        TableName: this.tableName,
      })
      .promise();

    return result.Items as Warehouse[];
  }

  async addToWarehouse(goods: Warehouse): Promise<Warehouse> {
    await this.docClient
      .put({
        TableName: this.tableName,
        Item: goods,
      })
      .promise();

    return goods;
  }

  async releaseById(id: string) {
    return this.docClient
      .delete({
        TableName: this.tableName,
        Key: { id },
      })
      .promise();
  }

  async releaseByOrder(orderId: string) {
    return this.docClient
      .delete({
        TableName: this.tableName,
        Key: { orderId },
      })
      .promise();
  }

  async releaseByWarehouseId(warehouseId: string) {
    return this.docClient
      .delete({
        TableName: this.tableName,
        Key: { warehouseId },
      })
      .promise();
  }
}

export default WarehouseService;
