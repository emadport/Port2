import mongoose from "mongoose";
import menuCategorySchema from "./menuCategorySchema";
import restaurangSchema from "./restaurangSchema";

var MenuItemSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      ref: menuCategorySchema ?? "MenuCategory",
    },
    restaurant: {
      type: String,
      ref: restaurangSchema ?? "Restaurang",
    },
    name: String,
    itemsType: String,
    price: mongoose.SchemaTypes.Number,
    description: String,
    quantity: mongoose.SchemaTypes.Number,
    availability: Boolean,
    subCat: { type: String, default: null },
    images: [],
  },
  { timestamps: true }
);
export default mongoose.models.MenuItem ||
  mongoose.model("MenuItem", MenuItemSchema);
