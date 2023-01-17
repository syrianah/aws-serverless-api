import createDynamoDBClient from "../db";
import WarehouseService from "./warehouseService";
// import PostService from "./postService";

// const { POSTS_TABLE } = process.env;

// const postService = new PostService(createDynamoDBClient(), POSTS_TABLE);

// export default postService;

// const { POSTS_TABLE } = process.env;

const warehouseService = new WarehouseService(
  createDynamoDBClient(),
  "Warehouse"
);

export default warehouseService;
