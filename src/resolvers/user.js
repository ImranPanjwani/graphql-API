export default {
  Query: {
    me: async (parent, args, { models, me }) => {
      return await models.User.findById(me.id);
    },
    user: async (_, { id }, { models }) => {
      return await models.User.findById(id);
    },
    users: async (parent, args, { models }) => {
      return await models.User.findAll();
    }
  },
  User: {
    messages: async (user, _, { models }) => {
      return await models.Message.findAll({
        where: {
          userId: user.id
        }
      });
    }
  }
};
