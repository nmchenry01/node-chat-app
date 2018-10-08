// [{
//     id: 'asoifjasoijfga',
//     name: 'displayName',
//     room: 'Office fans'
// }]

//add user(id, name, room)
//remove user(id)
//get user(id)
//get user list(room)

class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = { id, name, room };
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    var user = this.getUser(id);

    if (user) {
      var users = this.users.filter(user => {
        return user.id !== id;
      });
      this.users = users;
    }
    return user;
  }

  getUser(id) {
    var user = this.users.filter(user => {
      return user.id === id;
    });
    return user[0];
  }

  getUserList(room) {
    var users = this.users.filter(user => {
      return user.room === room;
    });
    var namesArray = users.map(user => {
      return user.name;
    });
    return namesArray;
  }
}

module.exports = { Users };
