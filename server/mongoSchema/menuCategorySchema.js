import mongoose from "mongoose";
import restaurangSchema from "./restaurangSchema";

var MenutCategorySchema = new mongoose.Schema(
  {
    restaurant: {
      type: String,
      ref: restaurangSchema,
    },

    itemName: String,
    collectionType: String,
  },
  { timestamps: true }
);
export default mongoose.models.MenuCategory ||
  mongoose.model("MenuCategory", MenutCategorySchema);
