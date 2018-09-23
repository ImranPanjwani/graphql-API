import uuidv4 from "uuid/v4";

export default {
  Query: {
    message: (_, { id }, { models }) => {
      return models.messages[id];
    },
    messages: (_, args, { models }) => {
      return Object.values(models.messages);
    }
  },
  Mutation: {
    createMessage: (_, { text }, { me }, { models }) => {
      const id = uuidv4();
      const message = {
        id,
        text,
        userId: me.id
      };
      models.messages[id] = message;
      models.users[me.id].messageIds.push(id);
      return message;
    },
    deleteMessage: (_, { id }, { models }) => {
      let message;
      if (messages[id]) {
        delete models.messages[id];
        message = `Successfully deleted : ${id}`;
      } else {
        message = "Invalid message id !!";
      }
      return message;
    }
  },
  Message: {
    user: (message, _, { models }) => {
      return models.users[message.userId];
    }
  }
};
