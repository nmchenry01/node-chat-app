const test = require("ava");

const { Users } = require("./users");

let users;
test.before(t => {
  users = new Users();
  users.users = [
    {
      id: "1",
      name: "Nicholas",
      room: "Node Course"
    },
    {
      id: "2",
      name: "Jen",
      room: "React Course"
    },
    {
      id: "3",
      name: "Jim",
      room: "Node Course"
    }
  ];
});

test("Test addUsers", t => {
  let users = new Users();
  const user = {
    id: "123",
    name: "Nicholas",
    room: "The Office Fans"
  };
  const resUser = users.addUser(user.id, user.name, user.room);
  t.is(resUser.id, user.id);
  t.is(resUser.name, user.name);
  t.is(resUser.room, user.room);
  t.deepEqual(users.users[0], user);
});

test("Test return all users", t => {
  var userList = users.getUserList("Node Course");
  t.is(userList.length, 2);
});

test("Test delete a user", t => {
  let users = new Users();
  const user = {
    id: "123",
    name: "Nicholas",
    room: "The Office Fans"
  };
  users.addUser(user.id, user.name, user.room);
  users.addUser("124", user.name, user.room);
  t.is(users.users.length, 2);
  users.removeUser("123");
  users.removeUser("124");
  t.is(users.users.length, 0);
});

test("Test get a user", t => {
  var user = users.getUser("2");
  t.is(user.name, "Jen");
});
