const actions = require('../actions');

class Client {
  constructor(channelAccessToken) {
    this.token = channelAccessToken;
  }

  /* functions to make and reply to messages */

  multicast(to, messages) {
    return actions.multicast(this.token, to, messages);
  }

  pushMessages(to, messages) {
    return actions.pushMessages(this.token, to, messages);
  }

  replyMessages(replytoken, messages) {
    return actions.replyMessages(this.token, replytoken, messages);
  }

  getGroupMemberIds(roomId, start) {
    return actions.getGroupMemberIds(this.token, roomId, start);
  }

  getGroupMemberProfile(groupId, userId) {
    return actions.getGroupMemberProfile(this.token, groupId, userId);
  }

  getProfile(userId) {
    return actions.getProfile(this.token, userId);
  }

  getRoomMemberIds(roomId) {
    return actions.getRoomMemberIds(this.token, roomId);
  }

  getRoomMemberProfile(roomId, userId) {
    return actions.getRoomMemberProfile(this.token, roomId, userId);
  }

  leaveGroup(groupId) {
    return actions.leaveGroup(this.token, groupId);
  }

  leaveRoom(roomId) {
    return actions.leaveRoom(this.token, roomId);
  }
}

module.exports = Client;