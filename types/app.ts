let arr: number[] = [25, 21, 32, 12];
console.log(arr);

interface UserInfo {
  userName: string;
  age: number;
  hasDriversLicence: boolean;
  // group?: [];
}

let users: UserInfo = {
  userName: "ბესო",
  age: 27,
  hasDriversLicence: true,
};

console.log(users);
let check = "";
if (users.hasDriversLicence) {
  check = '<i class="bi bi-check-lg"></i>';
} else {
  check = '<i class="bi bi-x"></i>';
}

let userType: any = `<ul>
    <li>სახელი: ${users.userName}</li>
    <li>ასაკი: ${users.age}</li>
    <li>მართვის მოწმობა: ${check}</li>
  </ul>`;

document.querySelector(".content").innerHTML = userType;
