var arr = [25, 21, 32, 12];
console.log(arr);
var users = {
    userName: "ბესო",
    age: 27,
    hasDriversLicence: true
};
console.log(users);
var check = "";
if (users.hasDriversLicence) {
    check = '<i class="bi bi-check-lg"></i>';
}
else {
    check = '<i class="bi bi-x"></i>';
}
var userType = "<ul>\n    <li>\u10E1\u10D0\u10EE\u10D4\u10DA\u10D8: ".concat(users.userName, "</li>\n    <li>\u10D0\u10E1\u10D0\u10D9\u10D8: ").concat(users.age, "</li>\n    <li>\u10DB\u10D0\u10E0\u10D7\u10D5\u10D8\u10E1 \u10DB\u10DD\u10EC\u10DB\u10DD\u10D1\u10D0: ").concat(check, "</li>\n  </ul>");
document.querySelector(".content").innerHTML = userType;
