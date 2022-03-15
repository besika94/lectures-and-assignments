$(function () {
  class User {
    constructor(userName, email, avatar) {
      this.userName = userName;
      this.email = email;
      this.avatar = avatar;
      this.role = true;
      this.login = true;
    }
  }

  let userOne = new User(
    "ბესო",
    "besika94@gmail.com",
    "https://cdn.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.webp"
  );

  $.ajax({
    type: "method",
    url: "userconfig.json",
    data: "data",
    dataType: "dataType",
    success: function (response) {
      console.log(response);
    },
  });

  console.log(userOne);
});
