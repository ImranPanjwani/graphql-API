const message = (sequelize, DataType) => {
    const Message = sequelize.define('message', {
        text: {
            type: DataType.STRING,
            validate : {
                notEmpty: {
                    args: true,
                    msg: 'A message text cannot be empty'
                }
            }
        }
    });

    Message.associate = models => {
        Message.belongsTo(models.User);
    }

    return Message;
}

export default message;
