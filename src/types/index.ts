export interface User {
    id: Number,
    username: string,
    password: string,
    email: string,
    phone: string,
    sex: string,
    birthday: Date
}

export interface chatRoomItemType {
    id: string,
    users: Array<Object>,
    lastMessage: Object,
    newMessage: string
}

export interface message {
    id: string,
    content: string,
    createdAt: string,
    user: {
        id: string,
        name: string,
        imageUrl: string
    }
}

export interface userInfoType {
    id: string,
    name: string,
    imageUrl: string
}