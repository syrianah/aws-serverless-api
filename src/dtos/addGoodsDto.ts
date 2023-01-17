interface AddGoods {
  body: {
    warehouseId: string;
    orderId: string;
    sheetId: string;
    process: string;
  };
}

export default AddGoods;
