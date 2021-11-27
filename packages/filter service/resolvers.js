import { Books } from "./models/BookFilters";

export const resolvers = {
  Query: {
    hello: () => "hi",
    books: async () => {
      console.log(Books.find());
      return await Books.find();
    },
    filterLanguage: async (_, { language }) =>
      await Books.find().where({ language: language }),
    filterType: async (_, { type }) => await Books.find().where({ type: type }),
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
