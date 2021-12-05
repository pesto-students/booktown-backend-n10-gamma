import { Books } from "./models/BookFilters";

export const resolvers = {
  Query: {
    books: async () => {
      console.log(Books.find());
      return await Books.find();
    },
    filterBooks: async (root, args) => {
      const reqPayload = args.payload;
      const query = [];
      Object.keys(reqPayload).forEach((key) => {
        if (reqPayload[key]) {
          if (key === "price" && Object.keys(reqPayload[key]).length > 0) {
            query.push({
              [key]: { $gte: reqPayload[key].min, $lte: reqPayload[key].max },
            });
          } else {
            query.push({ [key]: reqPayload[key] });
          }
        }
      });
      return await Books.find({ $and: query });
    },
    filterLanguage: async (_, { language }) =>
      await Books.find().where({ language: language }),
    filterType: async (_, { type }) =>
      await Books.find().where({ format: type }),
    filterPrice: async (_, { min, max }) =>
      await Books.find({ price: { $gte: min, $lte: max } }),
  },
  Mutation: {
    createBooks: (
      _,
      {
        id,
        title,
        subTitle,
        author,
        published,
        publisher,
        pages,
        description,
        url,
        type,
        language,
        price,
      }
    ) => {
      const book = new Books({
        id: id,
        title: title,
        subTitle: subTitle,
        author: author,
        published: published,
        publisher: publisher,
        pages: pages,
        description: description,
        url: url,
        type: type,
        language: language,
        price: price,
      });
      return book.save();
    },
  },
};
