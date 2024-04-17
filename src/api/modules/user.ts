import fetch from ".."
export const reqUserList = () => fetch('/api/register', { method: 'POST'})
// 根据用户 ID 获取好友列表
export const reqFriendList = (data: Object) => fetch('/user/getFriendList', { method: 'GET', params: data})