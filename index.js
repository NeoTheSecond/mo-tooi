const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { atTracking } = require("@keystonejs/list-plugins");
const expressSession = require("express-session");
const MongoStore = require("connect-mongo")(expressSession);

// Import Schemas
const UserSchema = require("./lists/User.js");
const TodoSchema = require("./lists/Todo.js");
const PostSchema = require("./lists/Post.js");

const PROJECT_NAME = "mo-tooi";
const adapterConfig = { mongoUri: "mongodb://localhost/mo-tooi" };

/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
    name: PROJECT_NAME,
    adapter: new Adapter(adapterConfig),
    sessionStore: new MongoStore({ url: "mongodb://localhost/mo-tooi" }),
    cookie: {
        secure: process.env.NODE_ENV === "production", // Default to true in production
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
        sameSite: false,
    },
    cookieSecret:
        "e28bde964d6c59b0bbd2b28b92cfca30609a4780d21f51a6bf6eb52124361735",
    // onConnect: async (keystone) => {
    //     await keystone.createItems({
    //         User: [
    //             {
    //                 name: "Admin",
    //                 email: "quangman1404@gmail.com",
    //                 password: "admin@1234",
    //                 isAdmin: true,
    //             },
    //         ],
    //     });
    // },
});

// lists
keystone.createList("Todo", TodoSchema);
keystone.createList("User", UserSchema);
keystone.createList("Post", PostSchema);

const authStrategy = keystone.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: "User",
});

module.exports = {
    keystone,
    apps: [
        new GraphQLApp(),
        new AdminUIApp({ enableDefaultRoute: true, authStrategy }),
    ],
};
