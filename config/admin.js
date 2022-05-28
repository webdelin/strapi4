module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '71f0850402436e058ea2d7070b1252da'),
  },
});
