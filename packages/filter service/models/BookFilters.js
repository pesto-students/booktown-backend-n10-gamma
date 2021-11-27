import mongoose from "mongoose";

export const Books = mongoose.model("Books", {
  id: Number,
  title: String,
  subTitle: String,
  author: String,
  published: String,
  publisher: String,
  pages: Number,
  description: String,
  url: String,
  type: String,
  language: String,
  price: Number,
});
