let users = {
    1: {
        id: '1',
        username: 'Imran Panjwani',
        age: 24,
        messageIds: [1],
        role: 'ADMIN'
    },
    2: {
        id: '2',
        username: 'John Doe',
        age: 22,
        messageIds: [2],
        role: 'USER'
    }
}

const messages = {
    1: {
        id: '1',
        text: 'Some text',
        userId: '1'
    },
    2: {
        id: '2',
        text: 'Some text 2',
        userId: '2'
    }
}

export default {
    users,
    messages
}
