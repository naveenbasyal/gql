import { quotes, users } from "../fakedb.js";
export const resolvers = {
    Query: {
      users: () => users,
      quotes: () => quotes,
      getUserById(_, { id }) {
        const user = users.find((user) => user.id == id);
        return user ? user : null;
      },
      getQuoteById: (_, { id }) => {
        const quote = quotes.find((quote) => quote.by == id);
        return quote ? quote : null;
      },
    },
    User: {
      quotes: (user) => {
        return quotes.filter((quote) => quote.by == user.id && quote);
      },
    },
    Quote: {
      username: (quote) => {
        const user = users.find((user) => user.id == quote.by);
        return user ? user.name : null;
      },
    },
  };
