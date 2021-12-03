import mongoose from "mongoose";

export const Books = mongoose.model("Books", {
  title: String,
  subTitle: String,
  author: String,
  published: String,
  publisher: String,
  pages: Number,
  description: String,
  files: [String],
  condition: String,
  language: String,
  price: Number,
  originalPrice: Number,
  status: String,
  format: String,
  subcategory: String,
  category: String,
});
