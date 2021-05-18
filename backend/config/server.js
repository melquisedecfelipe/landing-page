module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3333),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "d5e6dc514a8a4aaba2351a754be13cae"),
    },
  },
});
