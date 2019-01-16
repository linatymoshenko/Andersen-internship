// function loadUsers(userIds, load, done) {
//   let users = [];
//   for (let index = 0; index < userIds.length; index++) {
//     users.push(load(userIds[index]))
//   }
//   return users
// }
//
// module.exports = loadUsers;

function loadUsers(userIds, load, done) {
  let completed = 0;
  let users = [];
  userIds.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user;
      completed++;
      if (completed === userIds.length) {
        return done(users)
      }
    })
  })
}

module.exports = loadUsers;

//userIds = [ { id: 606, name: 'Elit Officia' },
//   { id: 678, name: 'In Ullamco' },
//   { id: 226, name: 'Quis Mollit' },
//   { id: 588, name: 'Deserunt Et' },
//   { id: 444, name: 'Nulla Amet' },
//   { id: 42, name: 'Esse Ut' },
//   { id: 923, name: 'Anim Incididunt' },
//   { id: 561, name: 'Et Pariatur' },
//   { id: 864, name: 'Eiusmod Nisi' },
//   { id: 681, name: 'Ut Anim' },
//   { id: 850, name: 'Aute Labore' },
//   { id: 468, name: 'Adipisicing Minim' },
//   { id: 350, name: 'Cillum Est' } ]
