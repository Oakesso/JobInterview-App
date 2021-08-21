const bcryptjs = require("bcryptjs"); // pwd encryption.
saltRounds = 10;

// data to inject in mongodb with pwd encryption.

var data = [
  {
    username: "Mister-Toto",
    email: "toto@gmail.com",
    password: bcryptjs.hashSync("12345", saltRounds),
    isAdmin: true,
    history: [],
  },
  {
    username: "Maria2",
    email: "maria2@gmail.com",
    password: bcryptjs.hashSync("12345", saltRounds),
    isAdmin: false,
    history: [],
  },
  {
    username: "Chewy",
    email: "chewbaca@gmail.com",
    password: bcryptjs.hashSync("12345", saltRounds),
    isAdmin: false,
    history: [],
  },
];

module.exports = data;
