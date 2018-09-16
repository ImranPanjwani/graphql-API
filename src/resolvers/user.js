export default {
    Query: {
        me: (parent, args, {me}) => {
            return me;
        },
        user: (_, { id }, {models}) => {
            return models.users[id];
        },
        users: ( parent, args, {models}) => {
            return Object.values(models.users);
        },
    },
    User: {
        messages: (user, _, {models}) => {
            return Object.values(models.messages).filter(message => {
                return message.userId === user.id;
            });
        }
    }
};