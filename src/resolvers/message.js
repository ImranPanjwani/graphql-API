export default {
  Query: {
    message: async (_, { id }, { models }) => {
      return await models.Message.findById(id);
    },
    messages: (_, args, { models }) => {
      return models.Message.findAll();
    }
  },
  Mutation: {
    createMessage: async (_, { text }, { me, models }) => {
      const message = {
        text,
        userId: me.id
      };
      return await models.Message.create(message);
    },
    deleteMessage: async (_, { id }, { models }) => {
      return models.Message.destroy({ where: { id } });
    }
  },
  Message: {
    user: async (message, _, { models }) => {
      return await models.User.findById(message.userId);
    }
  }
};
