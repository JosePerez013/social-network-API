const connection = require("../config/connection");
const { User } = require("../models");

const userNames = [
  "Sarah Martin",
  "Paul Lopez",
  "Alice Jones",
  "Henry Clark",
  "Grace Garcia",
  "Victor Hall",
  "Emily Ward",
  "William Green",
  "Laura Lee",
  "Steven Wright",
  "Monica Young",
  "Nicholas Robinson",
  "Chloe Miller",
  "Frank Harris",
  "Olivia Perez",
  "Thomas Price",
  "Kayla Cruz",
  "Daniel Smith",
  "Linda Kim",
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

connection.on("error", (err) => err);
connection.once("open", async () => {
  console.log("Connected to database!");
  await User.deleteMany({});

  const users = [];

  for (let i = 0; i < userNames.length; i++) {
    const username = userNames[i];
    const email = emails[i];

    users.push({ username, email });
  }

  await User.collection.insertMany(users);

  console.info("Users seeded!");
  process.exit(0);
});
