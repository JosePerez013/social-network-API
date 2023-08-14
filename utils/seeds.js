const connection = require("../config/connection");
const { User } = require("../models");

const usernames = [
  "sarahmartin",
  "paullopez",
  "alicejones",
  "henryclark",
  "gracegarcia",
  "victorhall",
  "emilyward",
  "williamgreen",
  "lauralee",
  "stevenwright",
  "monicayoung",
  "nicholasrobinson",
  "chloemiller",
  "frankharris",
  "oliviaperez",
  "thomasprice",
  "kaylacruz",
  "danielsmith",
  "lindakim",
];

emails = [
  "sarahmartin@gmail.com",
  "paullopez@yahoo.com",
  "alicejones@hotmail.com",
  "henryclark@aol.com",
  "gracegarcia@icloud.com",
  "victorhall@outlook.com",
  "emilyward@me.com",
  "williamgreen@live.com",
  "lauralee@msn.com",
  "stevenwright@comcast.net",
  "monicayoung@verizon.net",
  "nicholasrobinson@att.net",
  "chloemiller@charter.net",
  "frankharris@cox.net",
  "oliviaperez@centurylink.net",
  "thomasprice@earthlink.net",
  "kaylacruz@bellsouth.net",
  "danielsmith@yahoo.com",
  "lindakim@gmail.com",
];

// error handling for database connection
connection.on("error", (err) => err);
connection.once("open", async () => {
  console.log("Connected to database!");
// delete all users to seed new users
  await User.deleteMany({});

  const users = [];
// loops through usernames and emails to create new users
  for (let i = 0; i < userNames.length; i++) {
    const username = userNames[i];
    const email = emails[i];

    users.push({ username, email });
  }
// inserts users into database
  await User.collection.insertMany(users);

  console.info("Users seeded!");
  process.exit(0);
});
