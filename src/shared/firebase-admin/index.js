//Firebase config
const admin = require("firebase-admin");
const serviceAccount = require("./cms-react-91e11-firebase-adminsdk-cjolb-950753c309.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cms-react-91e11.firebaseio.com"
});

module.exports = admin;