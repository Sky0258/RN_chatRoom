import fetch from ".."
// 获取用户所在的 chatRoomList
export const reqChatRoomList = (data: Object) => fetch('/chatRoom/getChatRoomList', { method: 'GET', params: data});

// 获取聊天室内用户列表
export const reqChatRoomUserList = (data: Object) => fetch('/chatRoom/getChatRoomUserList', { method: 'GET', params: data});

// 获取聊天室聊天记录
export const reqChatRoomMessageRecord = (data: Object) => fetch('/chatRoom/getChatRoomMessageRecord', { method: 'GET', params: data});

// 发送消息
export const reqAddChatRoomMessage = (data: Object) => fetch('/chatRoom/addChatRoomMessage', { method: 'POST', data});