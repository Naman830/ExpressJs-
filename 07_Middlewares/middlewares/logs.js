function userCredentials(req, res, next) {
  console.log("username : (Naman)");
  console.log("email : (NamanSingla@gmail.com)");
  console.log("password : (Naman12345)");
  console.log("age: (17)");
  next();
}

export default userCredentials;
